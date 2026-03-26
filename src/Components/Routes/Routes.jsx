import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';

import Installation from '../Pages/Installation/Installation';
import Apps from '../Pages/Apps/Apps';
import Errorpage from '../Pages/Errorpage/Errorpage';
import axios from 'axios';
import AppDetails from '../Pages/Apps/AppDetails';


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                index:true,
                path: '/',
                loader: async () => {
                    const res = await axios.get('/apps.json');
                    // console.log(res.data.slice(0,8));
                    return res.data;
                },
                element:<Home></Home>
            },
            {
                path: '/apps',
                loader: async () => {
                    const res = await axios.get('/apps.json');
                    // console.log(res.data);
                    return res.data;
                },
                element:<Apps></Apps>
            },
            {
                path: '/appdetails/:id',
                loader: async ({ params }) => {
                    const res = await axios.get('/apps.json');
                    const singleApp = res.data.find(app => app.id === parseInt(params.id) );
                    // console.log(singleApp); 
                    return singleApp;
                },
                element: <AppDetails></AppDetails>,
                
            },
            {
                path: '/installation',
                loader: async () => {
                    const res = await axios.get('/apps.json');
                    // console.log(res.data);
                    return res.data;
                },
                element:<Installation></Installation>
            }
        ]
        
    }
])

export default Routes;