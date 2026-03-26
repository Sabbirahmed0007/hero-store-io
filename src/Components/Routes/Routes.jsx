import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';

import Installation from '../Pages/Installation/Installation';
import Apps from '../Pages/Apps/Apps';
import Errorpage from '../Pages/Errorpage/Errorpage';


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