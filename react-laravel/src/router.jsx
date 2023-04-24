import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Surveys from "./views/Surveys";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const router = createBrowserRouter([

  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      /*
      1 ая версия пути
      {
        path: '/',
        element: <Dashboard/>
      },
      2 ая версия пути
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },*/
      /*3 ая версия пути*/
      {
        path: '/dashboard',
        element: <Navigate to="/" />
      },
      {
        path: '/',
        element: <Dashboard/>
      },
      {
        path: '/surveys',
        element: <Surveys/>
      },
    ]
  },
  {
    path: '/', //url будет /login
    //path: '/guest', //url будет /guest/login
    element: <GuestLayout/>,
    children: [
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'login',
        element: <Login/>
      },
    ]
  },
])

export default router;
