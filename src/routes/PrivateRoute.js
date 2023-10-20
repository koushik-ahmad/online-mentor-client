import React, { useContext } from 'react';
import { UserContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from './Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;