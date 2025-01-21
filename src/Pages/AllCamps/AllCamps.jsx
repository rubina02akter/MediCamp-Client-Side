import React, { useState } from "react";
import useCamp from "../../Hooks/useCamp";
import PopularCamps from "../Home/PopularCamps";
import SearchBar from "../../components/SearchBar";

const AllCamps = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("default");
  const [camp] = useCamp();

  // Filter camps based on the search query
  const filteredCamps = camp.filter((c) =>
    Object.values(c)
      .join(" ") // Join all field values into a single string
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Sort camps based on the selected criteria
  const sortedCamps = [...filteredCamps].sort((a, b) => {
    switch (sortCriteria) {
      case "mostRegistered":
        return b.participantCount - a.participantCount; // Sort by most registered participants
      case "campFees":
        return a.campFees - b.campFees; // Sort by camp fees (ascending)
      case "alphabetical":
        return a.name.localeCompare(b.name); // Sort by camp name alphabetically
      default:
        return 0; // Default order (unsorted)
    }
  });

  return (
    <div>
      <div className="w-11/12 mx-auto py-24">
        {/* Search Bar */}
        <SearchBar
          placeholder="Search by Camp Name, Date, or Professional Name"
          onSearch={setSearchQuery}
        />

        {/* Sort Dropdown */}
        <div className="py-6">
          <select
            className="select select-bordered w-full max-w-xs"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="mostRegistered">Most Registered</option>
            <option value="campFees">Camp Fees</option>
            <option value="alphabetical">Alphabetical Order</option>
          </select>
        </div>
      </div>

      {/* Display Popular Camps */}
      <PopularCamps camps={sortedCamps} />
    </div>
  );
};

export default AllCamps;
