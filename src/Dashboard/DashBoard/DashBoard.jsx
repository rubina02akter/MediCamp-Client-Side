import { FaBars, FaAddressBook, FaCircle,  FaHome, FaList, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { useState } from "react";

const Dashboard = () => {
  // TODO: get admin from the database
  const [isAdmin] = useAdmin();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar for large screens */}
      <div className="w-64 min-h-screen text-white bg-[#274260] py-12 hidden lg:block">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addCamp">
                  <FaUtensils></FaUtensils>Add Camp
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCamp">
                  <FaList></FaList>Manage Camps
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageRegCamps">
                  <FaAddressBook></FaAddressBook>Manage Reg-Camps
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUsers></FaUsers>All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/analytics">
                  <FaHome></FaHome>Analytics
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/participant-profile">
                  <FaHome></FaHome>Participant Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/registered-camps">
                  <FaHome></FaHome>Registered Camps
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaHome></FaHome>Payment History
                </NavLink>
              </li>
              
            </>
          )}

          {/* Shared links */}
          <div className="divider">
            <FaCircle></FaCircle>
          </div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaVoicemail></FaVoicemail>Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dropdown for small and medium screens */}
      <div className="lg:hidden w-full bg-[#D1A054] py-4 px-6">
        <button
          className="flex items-center gap-2 text-white"
          onClick={toggleDropdown}
        >
          <FaBars className="text-lg"></FaBars>
          Menu
        </button>
        {isDropdownOpen && (
          <ul className="menu p-4 bg-[#D1A054]">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addCamp">
                    <FaUtensils></FaUtensils>Add Camp
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageCamp">
                    <FaList></FaList>Manage Camps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageRegCamps">
                    <FaAddressBook></FaAddressBook>Manage Reg-Camps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUser">
                    <FaUsers></FaUsers>All User
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/analytics">
                    <FaHome></FaHome>Analytics
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/participant-profile">
                    <FaHome></FaHome>Participant Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/registered-camps">
                    <FaHome></FaHome>Registered Camps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaHome></FaHome>Payment History
                  </NavLink>
                </li>
               
              </>
            )}

            {/* Shared links */}
            <div className="divider">
              <FaCircle></FaCircle>
            </div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaVoicemail></FaVoicemail>Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      <div className="flex-1 py-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
