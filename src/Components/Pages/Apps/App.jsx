import { Download } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const App = ({ app }) => {
    
    const { image, title, ratingAvg, downloads } = app;

    return (
        <div>

            <div className="card bg-base-100 w-64 mx-auto lg:w-full shadow-sm">
                <figure>
                    <img
                        className='h-40 object-cover'
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
            
        </div>
    );
};

export default App;