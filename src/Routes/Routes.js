import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import SingleCategories from "../Pages/Home/SingleCategories/SingleCategories";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import WishList from "../Pages/WishList/WishList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";






export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
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
            {
                path:'/singlecategory/:id',
                element:<PrivateRoute><SingleCategories></SingleCategories></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/allCategories/${params.id}`)
            },
            {
                path:'/wishlist/:id',
                element:<WishList></WishList>
            }
        ]
    }

])