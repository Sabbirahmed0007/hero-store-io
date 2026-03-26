import { Delete, Download, Star, Trash } from 'lucide-react';
import React from 'react';
import { removeApp } from '../../Utility/LocalStorage';

const InstallDetails = ({ installedApp, handleUninstall }) => {
    console.log(installedApp);

    const { id, image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = installedApp;


   

    return (
        <div className='flex items-center justify-between bg-white shadow p-4 rounded-lg'>
            <div className='flex items-center justify-center gap-3'>
                <div>
                    <img className='w-20' src={image} alt="" />
                </div>
                <div>
                    <h1 className=' font-semibold'>{title}</h1>
                    <div className='flex items-center gap-2'>
                        <div className='text-accent flex items-center gap-1 text-xs'><Download className='w-3' /> <span>{new Intl.NumberFormat("en-us", {
                            notation:'compact'
                        }).format(downloads)}</span></div>
                        <div className='text-orange-600 flex items-center  text-xs'><Star className='w-3' /><span>{ratingAvg}</span></div>
                        <p className=' text-xs'>{size} MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>handleUninstall(id)} className='flex items-center justify-center gap-1 text-sm btn bg-[#00D390] text-base-200'><Trash size={16}></Trash> Uninstall</button>
            </div>
        </div>
    );
};

export default InstallDetails;