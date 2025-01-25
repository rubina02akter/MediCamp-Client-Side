import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCamp from "../../Hooks/useCamp";
import { FaLayerGroup } from "react-icons/fa";

const PopularCamps = ({ sortAndSlice, camps }) => {
  const [popularCamps, setPopularCamps] = useState([]);
  const [camp, loading] = useCamp();
  const [isTwoColumn, setIsTwoColumn] = useState(false);

  useEffect(() => {
    let campsToDisplay = camps || camp; // Use the filtered camps passed as props, or the full camp data
    if (sortAndSlice && campsToDisplay.length > 0) {
      campsToDisplay = campsToDisplay
        .sort((a, b) => b.participantCount - a.participantCount) // Sort by participant count (descending)
        .slice(0, 6); // Limit to the top 6 camps
    }
    setPopularCamps(campsToDisplay);
  }, [camp, sortAndSlice, camps]);

  // Toggle layout function
  const toggleLayout = () => {
    setIsTwoColumn(!isTwoColumn);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="popular-camps w-11/12 mx-auto ">
      

      {/* Button to toggle between 2 or 3 column layout */}
    <div className="flex justify-end pb-4">
    <button
        onClick={toggleLayout}
        className="btn text-white bg-[#2B4D86]"
      >
       <FaLayerGroup></FaLayerGroup> {isTwoColumn ? "Toggle Layout" : "Toggle Layout"}
      </button>
    </div>

      <div
        className={`grid gap-6 ${isTwoColumn ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
      >
        {popularCamps.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No camps match your search criteria.
          </p>
        ) : (
          popularCamps.map((camp) => (
            <div
              key={camp._id}
              className="card shadow-lg  border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105"
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
                <p className="text-sm ">
                  <strong>Camp Fees:</strong> ${camp.campFees}
                </p>
                <p className="text-sm ">
                  <strong>Date and Time:</strong>{" "}
                  {new Date(camp.dateAndTime).toLocaleString()}
                </p>
                <p className="text-sm ">
                  <strong>Location:</strong> {camp.location}
                </p>
                <p className="text-sm ">
                  <strong>Healthcare Professional:</strong>{" "}
                  {camp.healthcareProfessional}
                </p>
                <p className="text-sm ">
                  <strong>Participants:</strong> {camp.participantCount}
                </p>
                <Link
                  to={`/camp/${camp._id}`}
                  className="btn btn-block text-white bg-[#2B4D86] mt-3"
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