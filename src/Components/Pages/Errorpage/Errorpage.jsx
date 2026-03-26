import React from 'react';
import errorImg from '../../../assets/images/error-404.png'
import { Link, useNavigate } from 'react-router';

const Errorpage = () => {


    const navigate = useNavigate();

    return (
        <div className='text-center'>
            <div>
                <img className='lg:w-1/3 mx-auto object-cover' src={errorImg} alt="" />
            </div>
            <h1 className='text-4xl my-2 font-bold'>Oops, page not found!</h1>
            <p className='my-2'>The page you are looking for is not available.</p>

            <button onClick={() => navigate(-1)} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>

        </div>
    );
};

export default Errorpage;