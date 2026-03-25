import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-base-300 py-10'>

            <footer className='px-6 grid grid-cols-1 lg:grid-cols-4 items-start gap-8 pb-6'>
                {/* Footer logo and desc */}
                <div>
                    <div className='flex items-center  space-x-1'>
                        <img className='w-18' src={logo} alt="" />
                        <h1 className='uppercase  font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text text-xl'>Hero.IO</h1>
                    </div>
                    <p className='text-justify text-gray-500 text-sm'>HERO.IO is your ultimate destination for discovering, exploring, and installing the most innovative and powerful applications available today. Built for modern users, it delivers a seamless browsing experience with detailed app insights, ratings, and reviews — all in one beautifully designed platform.</p>
                </div>

                {/* footer links */}
                <div >
                    <h1 className=' text-lg font-bold pb-3'>Quick links</h1>
                    <div className='flex flex-col items-start justify-center gap-1 text-sm'>

                        <Link className='text-gray-500 hover:text-base-content' to={'/'}>Home</Link>
                        <Link className='text-gray-500 hover:text-base-content' to={'/apps'}>Apps</Link>
                        <Link className='text-gray-500 hover:text-base-content' to={'/installation'}>Installation</Link>
                        <Link className='text-gray-500 hover:text-base-content' to={'/about'}>About Us</Link>
                    </div>
                </div>
                <div >
                    <h1 className=' text-lg font-bold pb-3'>Quick links</h1>
                    <div className='flex flex-col items-start justify-center gap-1 text-sm'>

                        <Link className='text-gray-500 hover:text-base-content' to={'/'}>Home</Link>
                        <Link className='text-gray-500 hover:text-base-content' to={'/apps'}>Apps</Link>
                        <Link className='text-gray-500 hover:text-base-content' to={'/installation'}>Installation</Link>
                        <Link className='text-gray-500 hover:text-base-content' to={'/about'}>About Us</Link>
                    </div>
                </div>
                <div >
                    <h1 className=' text-lg font-bold  pb-3'>Social links</h1>
                    <div className=' flex justify-baseline gap-4 '>

                        <Link to={'https://www.linkedin.com'}><FaLinkedinIn size={24} /></Link>
                        <Link to={'https://www.x.com'}><FaXTwitter size={24} /></Link>
                        <Link to={'https://www.facebook.com'}><FaFacebook size={24}></FaFacebook></Link>
                        <Link to={'https://www.youtube.com'}><FaYoutube size={24}/></Link>
                    </div>
                </div>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 py-6 border-t">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <Link to={'/'} className='font-bold'>Hero.IO</Link></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;