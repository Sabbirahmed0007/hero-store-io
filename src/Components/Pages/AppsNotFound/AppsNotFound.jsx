import React from 'react';
import { useNavigate } from 'react-router';
import notFound from '../../../assets/images/App-Error.png'

const AppsNotFound = () => {

    const navigate = useNavigate();

    return (
        <div className='text-center'>
                    <div>
                        <img className='lg:w-1/3 mx-auto object-cover' src={notFound} alt="" />
                    </div>
            <h1 className='text-4xl my-5 font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='my-4'>The App you are requesting is not found on our system.  please try another apps</p>
        
                    <button onClick={() => navigate(-1)} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
        
                </div>
    );
};

export default AppsNotFound;