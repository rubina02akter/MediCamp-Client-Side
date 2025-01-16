import { FaAddressBook, FaCircle, FaCuttlefish, FaHome, FaList, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";



const Dashboard = () => {

  //TODO: get admin from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054] py-12">
     <ul className="menu p-4">
       {
        isAdmin ? <>
        <li>
      <NavLink to='/dashboard/adminHome'><FaHome></FaHome>Admin Home</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/addCamp'><FaUtensils></FaUtensils>Add Camp</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/manageItems'><FaList></FaList>Manage Items</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/manageBookings'><FaAddressBook></FaAddressBook>Manage Bookings</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/allUser'><FaUsers></FaUsers>All User</NavLink>
      </li>
        </>
        : 
        <>
         <li>
      <NavLink to='/dashboard/allUser'><FaUsers></FaUsers>All User</NavLink>
      </li>
      
        <li>
      <NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/payment'><FaHome></FaHome>Reservation</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/history'><FaHome></FaHome> History</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/paymentHistory'><FaHome></FaHome>Payment Real History</NavLink>
      </li>
     
     <li>
      <NavLink to='/dashboard/review'><FaAddressBook></FaAddressBook>Add Review</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/bookings'><FaAddressBook></FaAddressBook>My bookings</NavLink>
      </li>
        </>
       }


      {/* sharerd */}
      <div className="divider"><FaCircle></FaCircle></div>
     <li>
      <NavLink to='/'><FaHome></FaHome>Home</NavLink>
      </li>
    
     <li>
      <NavLink to='/contact'><FaVoicemail></FaVoicemail>Contact</NavLink>
      </li>
     </ul>
      </div>

      <div className="flex-1 py-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;