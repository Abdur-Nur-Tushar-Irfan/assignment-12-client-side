import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../Context/UserContext';
import Header from '../Header/Header';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-12-server-psi.vercel.app/users?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setRole(data));
    }, [user?.email]);

    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {!isAdmin &&
                            role?.map((r) =>
                                r.role === "seller" ? (
                                    <>
                                        <li>
                                            <Link to="/dashboard/addProduct">Add A product</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/myProduct">My product</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/dashboard">My Orders</Link>
                                        </li>
                                    </>
                                )
                            )}
                        {isAdmin && (
                            <>
                                <li to=''>
                                    <Link to='/dashboard/buyer'>All Buyer</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/seller'>All Seller</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/report'>Reported Items</Link>
                                </li>
                            </>
                        )}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;