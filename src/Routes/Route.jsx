import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Alluser from "../Pages/Dashboard/Alluser/Alluser";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'/class',
          element:<Classes></Classes>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
   {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'allusers',
        element:<Alluser></Alluser>
      },
      {
        path:'manageclass',
        element:<ManageClasses></ManageClasses>
      }
    ]
   }
]);
