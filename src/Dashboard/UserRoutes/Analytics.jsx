import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access the email from the route
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Analytics = () => {
  const { email } = useParams(); // Retrieve email from the route
  const [chartData, setChartData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`/participants/${email}`);
        const camps = response.data;

        // Format the data for the chart
        const formattedData = camps.map((camp) => ({
          name: camp.campName, // Camp name
          campFees: camp.campFees, // Camp fee (or any other relevant value)
        }));

        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching participant data:", error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email, axiosSecure]);

  return (
    <>
   <Helmet>
   <title>Analytics|MediCamp</title>
   <meta name="description" content="Helmet application"></meta>
   </Helmet>
    <div className="px-6 py-12 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Analytics for : {email}
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Visualizing registered camps and associated fees for <span className="text-xl font-bold">{email}</span>.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="campFees" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-600">No data available for {email}.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Analytics;
