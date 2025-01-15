import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Home from "../Pages/Home/Home";
import LogIn from "../UserAuth/LogIn";
import SignUp from "../UserAuth/SignUp";


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
        path:'login',
        element: <LogIn></LogIn>
      },
      {
        path:'signup',
        element: <SignUp></SignUp>
      },
    ]
  }
])

export default router;