import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import { useLoaderData } from 'react-router';
import TrendingApps from './TrendingApps/TrendingApps';

const Home = () => {

    const trendingApps = useLoaderData();

    return (
        <div className='py-10'>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps trendingApps={trendingApps}></TrendingApps>
        </div>
    );
};

export default Home;