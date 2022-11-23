import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }

])