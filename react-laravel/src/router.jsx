import { createBrowserRouter} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Surveys from "./views/Surveys";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/surveys',
    element: <Surveys />
  },
  {
    path: '/', //url будет /login
    //path: '/guest', //url будет /guest/login
    element: <GuestLayout />,
    children: [
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      },
    ]
  },
])

export default router;
