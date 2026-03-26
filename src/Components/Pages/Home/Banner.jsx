import React from 'react';
import { Link } from 'react-router';
import googlePlay from '../../../assets/images/google-play.png'
import appStore from '../../../assets/images/app-store.png'
import hero from '../../../assets/images/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='text-center lg:w-3/5 mx-auto'>
                <h1 className=' text-center text-5xl lg:text-6xl font-bold '>We Build <br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h1>
                <p className='text-sm my-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='space-x-3'>
                    <Link to={'https://play.google.com/'} className='btn'><img src={ googlePlay} className='w-6' alt="" /> <span>Google Play</span></Link>
                    <Link to={'https://www.apple.com/app-store/'} className='btn'><img src={ appStore} className='w-6' alt="" /> <span>App Store</span></Link>
                </div>
            </div>
            <div className='my-5 lg:w-3/4 mx-auto'>
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;