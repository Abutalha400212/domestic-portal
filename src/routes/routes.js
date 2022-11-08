import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home"
import Details from "../Pages/Home/Services/Details/Details";
import Review from "../Pages/Review/Review";
import Login from "../Shared/Authentication/Login/Login";
import SignUp from "../Shared/Authentication/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`),
        element: <Details />,
      },
      {
        path:'/review',
        element:<Review/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ],
  }
]);
export default router;
