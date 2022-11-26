import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyer from "../Pages/DashBoard/AllBuyer/AllBuyer";
import Allseller from "../Pages/DashBoard/Allseller/Allseller";
import Dashboard from "../Pages/DashBoard/Dashboard/Dashboard";
import MyProduct from "../Pages/DashBoard/MyProduct/MyProduct";
import Order from "../Pages/DashBoard/Order/Order";
import DashboardLayout from "../Pages/DashboardLayout/DashboardLayout";
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
                path:'/blog',
                element:<Blog></Blog>

            },
          
            {
                path:'/wishlist/:id',
                element:<WishList></WishList>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/order',
                element:<Order></Order>
            },
            {
                path:'/dashboard/buyer',
                element:<AllBuyer></AllBuyer>
            },
          
            {
                path:'/dashboard/seller',
                element:<Allseller></Allseller>
            },
            {
                path:"/dashboard/addProduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/dashboard/myProduct",
                element:<MyProduct></MyProduct>
            },
          
          

        ]
    }


])