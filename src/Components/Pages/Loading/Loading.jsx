import React from 'react';
import loadingImg from '../../../assets/images/logo.png';

const Loading = () => {

    
    return (
        <div className='flex items-center justify-center animate-spin  scale-140'>
            <img className='w-18' src={loadingImg} alt="" />
        </div>
    );
};

export default Loading;