import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvidert';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    
    if(loading){
        return <Spinner animation='border' variant='info'></Spinner>
    }
   
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivetRoute;