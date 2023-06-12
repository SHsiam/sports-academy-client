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
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import AdminRoute from "./AdminRoute";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
        path:'history',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      //admin
      {
        path:'allusers',
        element:<AdminRoute><Alluser></Alluser></AdminRoute>
      },
      {
        path:'manageclass',
        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      //instructor
      {
        path:'addclass',
        element:<AddClass></AddClass>
      },
      {
        path:'myclasses',
        element:<MyClasses></MyClasses>
      }
    ]
   }
]);
