import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('adminEmail');

    
    return (
        token && email ? <Outlet /> : <Navigate to="/Login" />
    );
}

export default PrivateRoutes;