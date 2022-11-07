import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
{
    path:'/',
    element:<Main/>,
    errorElement:<Error/>,
    children:[
        {
            path:'/',
            element: <Home/>
        }
    ]
}
])
export default router