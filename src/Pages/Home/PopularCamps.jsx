import React, { useEffect, useState } from "react";
import useCamp from "../../Hooks/useCamp";



const PopularCamps = () => {
  const [popularCamps, setPopularCamps] = useState([]);
  const [camps, loading, refetch] = useCamp(); // Using the useCamp hook to get all camps

  useEffect(() => {
    // Sort camps based on the participantCount (descending) to get the popular camps
    if (camps.length > 0) {
      const sortedCamps = camps
        .sort((a, b) => b.participantCount - a.participantCount) // Sort by participant count
        .slice(0, 6); // Limit to the top 6
      setPopularCamps(sortedCamps);
    }
  }, [camps]); // Run this when `camps` data changes

  if (loading) return <div>Loading...</div>;

  return (
    <div className="popular-camps w-11/12 mx-auto">
      <h2>Popular Camps</h2>
      <div className="camp-list  grid grid-cols-3 gap-6">
        {popularCamps.length === 0 ? (
          <p>No popular camps available.</p>
        ) : (
          popularCamps.map((camp) => (
            <div key={camp._id} className="camp-card">
              <img src={camp.image} alt={camp.name} className="camp-image" />
              <div className="camp-info">
                <h3>{camp.name}</h3>
                <p>
                  <strong>Camp Fees:</strong> ${camp.price}
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
                
              </div>
            </div>
          ))
        )}
      </div>
    
    </div>
  );
};

export default PopularCamps;
