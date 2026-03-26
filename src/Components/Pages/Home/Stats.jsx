import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-center p-20 text-white'>
            <div>
                <h1 className='capitalize font-bold text-4xl'>Trusted By Millions, Built for You</h1>
            </div>
            <div className='  rounded-lg'>
                <div className="stats stats-vertical lg:stats-horizontal ">
                    <div className="stat  space-y-2">
                        <div className="stat-title text-white">Total Downloads</div>
                        <div className="stat-value font-bold">
                            29.6M
                        </div>
                        <div className="stat-desc capitalize text-white">21% More than last month</div>
                    </div>
                    <div className="stat space-y-2">
                        <div className="stat-title text-white">Total Reviews</div>
                        <div className="stat-value font-bold text-white">
                            906k
                        </div>
                        <div className="stat-desc capitalize text-white">46% More than last month</div>
                    </div>
                    <div className="stat space-y-2">
                        <div className="stat-title text-white"> Active Apps</div>
                        <div className="stat-value font-bold text-white">
                            132+
                        </div>
                        <div className="stat-desc capitalize text-white">31 More will launch</div>
                    </div>
                    


                </div>
            </div>
            
        </div>
    );
};

export default Stats;