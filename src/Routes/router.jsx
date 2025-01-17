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
import UpdateCamp from "../Dashboard/DashBoard/UpdateCamp";
import MyProfile from "../Dashboard/AdminProfile/MyProfile";
import Analytics from "../Dashboard/UserRoutes/Analytics";
import UserProfile from "../Dashboard/UserRoutes/UserProfile";
import RegisteredCamp from "../Dashboard/UserRoutes/RegisteredCamp";
import PaymentHistory from "../Dashboard/UserRoutes/Payment/PaymentHistory";
import UpdateUserPro from "../Dashboard/UserRoutes/UpdateUserPro";
import ErrorPage from "../Pages/ErrorRoute/ErrorPage";
import Payment from "../Dashboard/UserRoutes/Payment/Payment";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
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
      //admin routes
      {
       path: 'adminHome',
       element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
       path: 'update-profile',
       element: <AdminRoute><MyProfile></MyProfile></AdminRoute>
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
      {
        path: 'update-camp/:id',
        element: <AdminRoute><UpdateCamp></UpdateCamp></AdminRoute>  ,
        loader: ({params}) => fetch(`http://localhost:4000/camp/${params.id}`)  
      },
      //user routes
      {
        path: 'analytics',
        element:<Analytics></Analytics>
      },
      {
        path: 'participant-profile',
        element:<UserProfile></UserProfile>
      },
      {
        path: 'update-user-profile',
        element:<UpdateUserPro></UpdateUserPro>
      },
      {
        path: 'registered-camps',
        element: <RegisteredCamp></RegisteredCamp>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path: 'feedback',
        element:<PaymentHistory></PaymentHistory>
      },
    
    ]
  }


])

export default router;