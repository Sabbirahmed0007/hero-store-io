import React, { useEffect, useState } from 'react';

import logo from '../../assets/images/logo.png'
import {Menu, Moon, Sun} from 'lucide-react'
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {

    const [theme, setTheme] = useState('light');



    useEffect(() => {
        
        const getTheme = localStorage.getItem('theme');
        setTheme(getTheme);

        document.documentElement.setAttribute('data-theme', getTheme);

    },[])

    const toggleTheme = () => {
        
        const changeTheme = theme === 'light' ? 'dark' : 'light';

        setTheme(changeTheme);

        localStorage.setItem('theme', changeTheme);

        document.documentElement.setAttribute('data-theme', changeTheme)
    }


    const links = (
        <div className='flex flex-col lg:flex-row lg:items-center  gap-5'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline font-semibold" : " text-sm font-bold"}>Home</NavLink>
            <NavLink to={'/apps'}  className={({ isActive }) => isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline font-semibold" : " text-sm font-bold"}>Apps</NavLink>
            <NavLink to={'/installation'} className={({ isActive }) => isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline font-semibold" : " text-sm font-bold"}>Installation</NavLink>
            {/* Theme */}
            <div className='lg:hidden'>
                <button onClick={toggleTheme} className='btn w-full'>
                    {theme === 'dark' ? <Sun></Sun> : <Moon></Moon>}
                </button>
            </div>
        </div>
    )

    return (
        <div className=''>

            {/* navbar starting content */}
            <div className='navbar bg-base-300 px-6 '>
                <div className='navbar-start space-x-1'>
                    <img className='w-10' src={logo} alt="" />
                    <h1 className='uppercase  font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Hero.IO</h1>
                </div>

                {/* navber center content */}
                <div className='navbar-center hidden lg:flex '>

                    <ul>
                        { links}
                    </ul>

                </div>

                {/* navbar end contents */}
                <div className='navbar-end'>


                    {/* Theme */}
                    <div className='mr-2 hidden lg:flex'>
                        <button onClick={toggleTheme} className='btn btn-circle'>
                            {theme === 'dark'? <Sun></Sun>:<Moon></Moon>}
                        </button>
                    </div>


                    <div className='hidden lg:flex'>
                        <Link className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'><FaGithub size={24} /><span>Contribute</span></Link>
                    </div>


                    <div className='dropdown lg:hidden'>

                        <div className='btn btn-ghost' tabIndex={0} role='button'>
                            <Menu></Menu>
                        </div>

                        <div tabIndex={-1}
                        className='menu dropdown-content w-56 bg-base-200 right-0 rounded-md z-10 mt-5 shadow-md p-5'>
                            <ul>
                                {links}
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;