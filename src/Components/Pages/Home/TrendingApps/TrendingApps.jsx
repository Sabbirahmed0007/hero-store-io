import React from 'react';
import AppsNotFound from '../../AppsNotFound/AppsNotFound';
import App from '../../Apps/App';
import { Link } from 'react-router';

const TrendingApps = ({ trendingApps }) => {
    

    console.log(trendingApps);
    

    return (
        <div className='px-8 box-border mt-16'>
            <div className='text-center my-10'>
                <h1 className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text text-4xl font-bold'>Trending Apps</h1>
                <p className='text-gray-500 mt-5'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6'>
                {
                    trendingApps.length===0?<AppsNotFound></AppsNotFound>: trendingApps.slice(0, 8).map(app=><App key={app.id} app={app}></App>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to={'/apps'} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show all</Link>
            </div>


            
        </div>
    );
};

export default TrendingApps;