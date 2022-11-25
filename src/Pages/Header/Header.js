import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcLock, FcUnlock } from "react-icons/fc";
import { AuthContext } from '../Context/UserContext';
import toast from 'react-hot-toast';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate=useNavigate()
    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('successfully log out')
                navigate('/')
                
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar py-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                        {
                            user?.displayName ?
                                <>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                    <li><button onClick={handleSignOut}><FcLock></FcLock>Logout</button> <p >{user?.displayName}</p></li>
                                </>
                                :
                                <li><Link to='/Login'><FcUnlock></FcUnlock>Login</Link></li>

                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">IT Gadget BD</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user?.displayName ?
                            <>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={handleSignOut}><FcLock></FcLock>Logout</button> <p>{user?.displayName}</p></li>
                            </>
                            :
                            <li><Link to='/Login'><FcUnlock></FcUnlock>Login</Link></li>
                    }
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden navbar-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Header;