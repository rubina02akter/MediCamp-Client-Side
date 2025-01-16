import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Home from "../Pages/Home/Home";
import LogIn from "../UserAuth/LogIn";
import SignUp from "../UserAuth/SignUp";
import DashBoard from "../Dashboard/DashBoard/DashBoard";
import AllUser from "../Dashboard/DashBoard/AllUser";
import AdminRoute from "./AdminRoute";
import AddCamp from "../Dashboard/DashBoard/AddCamp";
import AllCamps from "../Pages/AllCamps/AllCamps";
import CampDetails from "../Pages/Home/CampDetails";
import ManageCamps from "../Dashboard/DashBoard/ManageCamps";
import ManageRegCamps from "../Dashboard/DashBoard/ManageRegCamps";
import AdminHome from "../Dashboard/DashBoard/AdminHome";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    errorElement: '',
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'available-camps',
        element: <AllCamps></AllCamps>
      },
      {
        path:'/camp/:campId',
        element: <CampDetails></CampDetails>,
       
      },
      {
        path:'login',
        element: <LogIn></LogIn>
      },
      {
        path:'signup',
        element: <SignUp></SignUp>
      },
    ]
  },

  //dashboard
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children:[
      {
       path: 'adminHome',
       element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'allUser',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>    
      },
      {
        path: 'addCamp',
        element: <AdminRoute><AddCamp></AddCamp></AdminRoute>    
      },
      {
        path: 'manageCamp',
        element: <AdminRoute><ManageCamps></ManageCamps></AdminRoute>    
      },
      {
        path: 'manageRegCamps',
        element: <AdminRoute><ManageRegCamps></ManageRegCamps></AdminRoute>    
      },
    ]
  }


])

export default router;