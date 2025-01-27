import React, { useState } from "react";
import useCamp from "../../Hooks/useCamp";
import PopularCamps from "../Home/PopularCamps";
import SearchBar from "../../components/SearchBar";
import { Helmet } from "react-helmet";

const AllCamps = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("default");
  const [camp] = useCamp();

  // Filter camps based on the search query
  const filteredCamps = camp.filter((c) => {
    const campName = c.name?.toLowerCase() || "";
    const campDate = c.date?.toLowerCase() || ""; // Assuming date is a string
    const healthcareProfession = c.profession?.toLowerCase() || "";

    // Check if the search query matches any of the fields
    return (
      campName.includes(searchQuery.toLowerCase()) ||
      campDate.includes(searchQuery.toLowerCase()) ||
      healthcareProfession.includes(searchQuery.toLowerCase())
    );
  });

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
    <>
    <Helmet>
    <title>Available Camps|MediCamp</title>
    <meta name="description" content="Helmet application"></meta>
    </Helmet>
 
    <div className="mb-12">
      <div className="w-11/12 mx-auto pt-24 ">
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
    </>
  );
};

export default AllCamps;