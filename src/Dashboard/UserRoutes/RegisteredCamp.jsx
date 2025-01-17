import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const RegisteredCamp = () => {
  const [participantData, setParticipantData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {user} = useAuth()

  useEffect(() => {
    const fetchParticipantData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/participants/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setParticipantData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipantData();
  }, [user?.email]);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  if (!participantData || participantData.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No participant found with this email.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-3xl font-semibold text-center mb-6">Registered Camps</h2>
    <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-6 py-3 text-left text-sm font-medium">Camp Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Camp Fees</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Participant Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Payment Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Payment Confirmation Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {participantData.map((camp, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-700">{camp.campName}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-700">${camp.campFees}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-700">{camp.name}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-700">
                <span className="px-2 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">
                  Un-Paid
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-700">
                <span className="px-2 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-600">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-700">
                <div className="grid gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Pay
                </button>
                <button className="ml-3 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                  Cancel
                </button>
                <button className="ml-3 bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  Feedback
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default RegisteredCamp;

