import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import AuthProvidert from './Provider/AuthProvidert';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvidert><RouterProvider router={router}></RouterProvider></AuthProvidert> 
  </React.StrictMode>,
)
