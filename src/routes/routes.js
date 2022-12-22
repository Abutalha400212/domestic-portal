import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Main from "../layout/Main";
import AddService from "../Pages/Add Service/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Services/Details/Details";
import Review from "../Pages/Review/Review";
import ReviewUpdate from "../Pages/Review/ReviewUpdate/ReviewUpdate";
import Login from "../Shared/Authentication/Login/Login";
import SignUp from "../Shared/Authentication/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
path:"/",
element:<Home/>
  },
  {
path:"/home",
element:<Home/>
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://domestic-travel-server.vercel.app/details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/review",
        element: (
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <ReviewUpdate></ReviewUpdate>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
export default router;
