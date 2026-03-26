import React from 'react';
import Navbar from '../Header/Navbar';
import { NavLink, Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Layout = () => {






    return (
        <div className='max-w-7xl mx-auto space-y-16'>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Layout;