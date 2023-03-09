import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Allcontext';

const Private = ({children}) => {
    const { user, loader} = useContext(AuthContext)
    const location = useLocation()
    
    if (loader) {
        return <progress className="progress w-56 text-center"></progress>
    };
    if (user) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default Private;