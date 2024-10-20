import { createBrowserRouter, Link } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import CreateListing from "../pages/CreateListing";
import Login from "../pages/Login";
import Favorites from "../pages/Favorites";

const router = createBrowserRouter([
{
    path: "/",
    element: <Home/>
},
{
    path:"about",
    element: <About/>
},
{
    path: "createlisting",
    element: <CreateListing/>
},
{
    path: "login",
    element: <Login/>
},
{
    path: "favorites",
    element: <Favorites/>
}
]);

export default router;
