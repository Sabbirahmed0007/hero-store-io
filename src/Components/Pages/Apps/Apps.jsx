import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';
import AppsNotFound from '../AppsNotFound/AppsNotFound';

const Apps = () => {


    const apps = useLoaderData();

    const [allApps, setAllApps] = useState(apps)
    
    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.value;
        console.log(e.target.value);

        const searchedApps = apps.filter(app => app.title.toLowerCase().includes(searchValue))

        setAllApps(searchedApps);
        
        console.log(searchedApps);
        
        
        
    }

    return (
        <div className='p-8 box-border'>
            <div className='text-center'>
                <h1 className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text text-4xl font-bold'>Our All Applications</h1>
                <p className='text-gray-500 mt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mt-10 mb-5 gap-8'>
                <h1 className='text-2xl font-bold'>{allApps.length} Apps Found</h1>
                <div>
                    {/* Search bar  */}
                    <div className="w-72 max-w-md mx-auto">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm">


                            <input
                                
                                onChange={handleSearch}
                                type="text"
                                placeholder="search Apps"
                                className="relative pl-6 w-full outline-none text-sm text-gray-600 placeholder-gray-400"
                            />
                            
                            <Search className="absolute text-gray-400" size={18} />
                        </div>
                    </div>
                    {/* Search bar  */}

                </div>
            </div>
            {/* Apps */}
            <div>
                {
                    allApps.length ===0? <AppsNotFound></AppsNotFound>:<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6'>
                {allApps.map(app=><App key={app.id} app={app}></App>)}
            </div>
                }
            </div>
            
        </div>
    );
};

export default Apps;