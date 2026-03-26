import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import Routes from './Components/Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes}></RouterProvider>
    <Toaster />
    <ToastContainer />
  </StrictMode>,
)
