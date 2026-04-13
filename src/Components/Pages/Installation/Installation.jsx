import { useEffect, useState } from 'react';
import { getApps, removeApp } from '../../Utility/LocalStorage';
import { useLoaderData } from 'react-router';
import InstallDetails from './InstallDetails';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { toast } from 'react-toastify';
import AppsNotFound from '../AppsNotFound/AppsNotFound';
import Loading from '../Loading/Loading';
// import {toast} from 'react-hot-toast';

const Installation = () => {

    const [showInstalledApps, setShowInstalledApps] = useState([]);
    const [sort, setSort] = useState("");
    const [sortD, setSortD] = useState("");

    const installedApps = useLoaderData();
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);
        const storedApps = getApps();
        // console.log(storedApps);
        const storedApp = storedApps.map(app => parseInt(app.id));
        console.log(storedApp);

        const myInstalledApp = installedApps.filter(app => storedApp.includes(app.id))
        console.log(myInstalledApp);
        setShowInstalledApps(myInstalledApp)

        setLoading(false);


    }, [installedApps])

    // Sorting based on size

    const handleSort = (type) => {
        setLoading(true);
        if (type === 'htl') {
            setSort('High To Low');

            const highToLow = showInstalledApps.sort((a, b) => b.size - a.size);
            setShowInstalledApps(highToLow)

        }
        if (type === 'lth') {
            setSort("Low To High")
            const lowToHigh = showInstalledApps.sort((a, b) => a.size - b.size);
            setShowInstalledApps(lowToHigh)
        }
        setLoading(false);
    }



    // Sort by downloads

    const handleSortByDownload = (type) => {

        setLoading(true);
        
        console.log(type);
        if (type === 'lth') {
            setSortD('Low To High');
            const lth = installedApps.sort((a, b) => a.downloads - b.downloads);
            setShowInstalledApps(lth);
        }
        if (type === 'htl') {
            setSortD('High to Low');
            const htl = installedApps.sort((a, b) => b.downloads - a.downloads)
            setShowInstalledApps(htl);
        }

        setLoading(false);
        
    }

    // Removing apps

    const handleUninstall = (id) => {
        console.log('Deleted');

        Confirm.show(
            'Are You sure',
            'Do you want to uninstall?',
            'Yes',
            'No',
            () => {
              
                removeApp(id);
                toast.success("App has been Uninstalled successfully")
                // toast.success("App has been Uninstalled successfully");
                const remainedApps = showInstalledApps.filter(app => app.id !== id);
        
                setShowInstalledApps(remainedApps)

            },
            
        );


    }







    return (
        <div className='px-6 box-border'>
            
            <div className='text-center '>
                <h1 className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-500 mt-5'>Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-between mt-10 mb-5 gap-5'>
                <h1 className='text-2xl font-bold'>{showInstalledApps.length} Apps Found</h1>
                <div className='flex items-center justify-center'>
                    <details className="dropdown  ">
                        <summary className="btn  m-1 p-2"><div className=' font-semibold'>Sort By  {sortD ? `Download ${sortD}` : 'Download'}</div></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSortByDownload('htl')}>High To Low</a></li>
                            <li><a onClick={() => handleSortByDownload('lth')}>Low To High</a></li>

                        </ul>
                    </details>
                    <details className="dropdown  ">
                        <summary className="btn  m-1"><div className=' font-semibold'>Sort By  {sort ?  `Size ${sort}` : 'Size'}</div></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('htl')}>High To Low</a></li>
                            <li><a onClick={() => handleSort('lth')}>Low To High</a></li>

                        </ul>
                    </details>
                </div>
            </div>

            <div className='space-y-8'>
                { loading?<Loading></Loading>:showInstalledApps.length===0?<AppsNotFound></AppsNotFound>: showInstalledApps.map(installedApp => <InstallDetails key={installedApp.id} installedApp={installedApp} handleUninstall={handleUninstall}></InstallDetails>)}
            </div>
        </div>
    );
};

export default Installation;