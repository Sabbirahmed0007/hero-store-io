import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';

import Installation from '../Pages/Installation/Installation';
import Apps from '../Pages/Apps/Apps';
import Errorpage from '../Pages/Errorpage/Errorpage';
import axios from 'axios';


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                index:true,
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/apps',
                loader: async () => {
                    
                    const res = await axios.get('/apps.json');
                    console.log(res.data);
                    return res.data;
                },
                element:<Apps></Apps>
            },
            {
                path: '/installation',
                element:<Installation></Installation>
            }
        ]
        
    }
])

export default Routes;