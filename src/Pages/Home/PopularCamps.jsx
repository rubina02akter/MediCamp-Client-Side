import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCamp from "../../Hooks/useCamp";

const PopularCamps = ({ sortAndSlice, camps }) => {
  const [popularCamps, setPopularCamps] = useState([]);
  const [camp, loading] = useCamp();

  useEffect(() => {
    let campsToDisplay = camps || camp; // Use the filtered camps passed as props, or the full camp data
    if (sortAndSlice && campsToDisplay.length > 0) {
      campsToDisplay = campsToDisplay
        .sort((a, b) => b.participantCount - a.participantCount) // Sort by participant count (descending)
        .slice(0, 6); // Limit to the top 6 camps
    }
    setPopularCamps(campsToDisplay);
  }, [camp, sortAndSlice, camps]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="popular-camps w-11/12 mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Camps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularCamps.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No camps match your search criteria.
          </p>
        ) : (
          popularCamps.map((camp) => (
            <div
              key={camp._id}
              className="card shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <figure className="overflow-hidden">
                <img
                  src={camp.image}
                  alt={camp.name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-lg font-semibold">{camp.name}</h3>
                <p className="text-sm text-gray-700">
                  <strong>Camp Fees:</strong> ${camp.campFees}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Date and Time:</strong>{" "}
                  {new Date(camp.dateAndTime).toLocaleString()}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Location:</strong> {camp.location}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Healthcare Professional:</strong>{" "}
                  {camp.healthcareProfessional}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Participants:</strong> {camp.participantCount}
                </p>
                <Link
                  to={`/camp/${camp._id}`}
                  className="btn btn-block btn-primary mt-3"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopularCamps;
