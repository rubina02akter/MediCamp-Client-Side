import React, { useEffect, useState } from "react";
import useCamp from "../../Hooks/useCamp";
import { Link } from "react-router-dom";

const PopularCamps = ({ sortAndSlice }) => {
  const [popularCamps, setPopularCamps] = useState([]);
  const [camp, loading] = useCamp();

  useEffect(() => {
    if (camp.length > 0) {
      let campsToDisplay = camp;
      
      // Sort and slice only if the prop is true
      if (sortAndSlice) {
        campsToDisplay = campsToDisplay
          .sort((a, b) => b.participantCount - a.participantCount) // Sort by participant count (descending)
          .slice(0, 6); // Limit to the top 6 camps
      }

      setPopularCamps(campsToDisplay);
    }
  }, [camp, sortAndSlice]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="popular-camps w-11/12 mx-auto">
      
      <div className="camp-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularCamps.length === 0 ? (
          <p>No popular camps available.</p>
        ) : (
          popularCamps.map((camp) => (
            <div key={camp._id} className="camp-card">
              <img src={camp.image} alt={camp.name} className="camp-image" />
              <div className="camp-info">
                <h3>{camp.name}</h3>
                <p>
                  <strong>Camp Fees:</strong> ${camp.campFees}
                </p>
                <p>
                  <strong>Date and Time:</strong>{" "}
                  {new Date(camp.dateAndTime).toLocaleString()}
                </p>
                <p>
                  <strong>Location:</strong> {camp.location}
                </p>
                <p>
                  <strong>Healthcare Professional:</strong>{" "}
                  {camp.healthcareProfessional}
                </p>
                <p>
                  <strong>Participants:</strong> {camp.participantCount}
                </p>
                <Link to={`/camp/${camp._id}`} className="btn btn-link border">
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
