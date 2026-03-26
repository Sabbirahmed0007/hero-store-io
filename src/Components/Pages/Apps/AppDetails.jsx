import { Download, Star } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import reviewIcon from '../../../assets/images/review-icon.png'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {

    const app = useLoaderData();

    console.log(app);

    const { id, image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;

    const barData = ratings.map(rating => {
        const name = rating.name;
        const count = rating.count;

        return { name, count };
    })
    

    return (
        <div>
            {/* Details  */}
            <div className='flex flex-col lg:flex-row lg:items-start justify-start gap-5 border-b pb-8   '>
                <div>
                    <img className='w-100 h-90 object-cover shadow-lg mx-auto rounded-2xl' src={image} alt={title} />
                </div>
                <div className='flex-1'>
                    <div className=' border-b pb-6'>
                        <h1 className='text-3xl font-bold'>{title} </h1>
                        <p className='text-gray-400 font-semibold my-3'>Developed By <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>{ companyName}</span></p>
                    </div>
                    {/* Stats */}
                    <div className='lg:w-110 shadow rounded-lg'>
                        <div className="stats stats-horizontal flex items-center justify-center my-6">
                            <div className="stat space-y-2">
                                <div className="stat-title "><Download/></div>
                                <div className="stat-title font-bold">
                                    Downloads
                                </div>
                                <div className="stat-value">{new Intl.NumberFormat("en-us",{
                                   notation:'compact'
                                }).format(downloads)}</div>
                            </div>
                            <div className="stat  space-y-2">
                                <div className="stat-title "><Star className='text-orange-500 fill-orange-500'/></div>
                                <div className="stat-title font-bold">
                                    Average Ratings
                                </div>
                                <div className="stat-value">{ratingAvg}</div>
                            </div>
                            <div className="stat  space-y-2">
                                <div className="stat-title "><img className='w-7' src={reviewIcon} alt="" /></div>
                                <div className="stat-title font-bold">
                                    Reviews
                                </div>
                                <div className="stat-value">{new Intl.NumberFormat('en-us', {
                                    notation:'compact'
                                }).format(reviews)}</div>
                            </div>

                            
                        </div>
                    </div>
                    <div className='text-center lg:text-left'>
                        <button className='btn btn-success text-white'>Install Now ({ size}MB)</button>
                    </div>
                </div>

            </div>
            {/*Bar chats of ratings */}

            <div>
                <ResponsiveContainer height={300} className='p-5'>

                <BarChart layout={'vertical'} data={barData}>
                    <XAxis type='number' tickFormatter={(v) =>
                        new Intl.NumberFormat("en-us", {
                        notation:'compact'
                        }).format(v)} dataKey={"count"} />
                    <YAxis dataKey={'name'} type='category' />
                        <Bar dataKey="count"
                            fill="#FF8811" 
                            radius={[0, 10, 10, 0]} ></Bar>
                        <Tooltip></Tooltip>
                </BarChart>       
                </ResponsiveContainer>
            </div>


            


        </div>
    );
};

export default AppDetails;