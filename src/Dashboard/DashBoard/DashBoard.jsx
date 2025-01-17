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
      <NavLink to='/dashboard/adminHome'><FaHome></FaHome>Admin Profile</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/addCamp'><FaUtensils></FaUtensils>Add Camp</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/manageCamp'><FaList></FaList>Manage Camps</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/manageRegCamps'><FaAddressBook></FaAddressBook>Manage Reg-Camps</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/allUser'><FaUsers></FaUsers>All User</NavLink>
      </li>
        </>
        : 
        <>
      
      
        <li>
      <NavLink to='/dashboard/analytics'><FaHome></FaHome>Analytics</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/participant-profile'><FaHome></FaHome>Participant Profile</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/registered-camps'><FaHome></FaHome>Registered Camps</NavLink>
      </li>
     <li>
      <NavLink to='/dashboard/paymentHistory'><FaHome></FaHome>Payment History</NavLink>
      </li>
     
     <li>
      <NavLink to='/dashboard/feedback'><FaAddressBook></FaAddressBook>Add Feedback</NavLink>
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