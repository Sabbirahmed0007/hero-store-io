import { Download } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const App = ({ app }) => {
    
    const {id, image, title, ratingAvg, downloads } = app;

    return (
        <Link to={`/appdetails/${id}`}>

            <div className="card bg-white w-64 mx-auto lg:w-full shadow-md text-black">
                <figure>
                    <img
                        className='h-40 rounded-md object-cover'
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex items-center justify-between my-3'>
                        <div className="badge badge-soft badge-success p-2 box-border"><Download size={20}/><span>{new Intl.NumberFormat("en-us", {
                            notation:'compact'
                        }).format(downloads)}</span></div>
                        <div className="badge badge-soft badge-warning"><FaStar/>{ratingAvg}</div>
                    </div>
                    
                    
                </div>
            </div>
            
        </Link>
    );
};

export default App;