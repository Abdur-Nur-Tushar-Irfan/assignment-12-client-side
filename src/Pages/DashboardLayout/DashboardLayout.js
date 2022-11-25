import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const DashboardLayout = () => {
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
                        <li><Link to='/dashboard/order'>My Order</Link></li>
                        <li><Link to='/dashboard/product'>Add A product</Link></li>
                        <li><Link to='/dashboard/seller'>All Seller</Link></li>
                       
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;