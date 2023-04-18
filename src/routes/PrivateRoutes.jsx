import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading } =useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56 mx-auto mt-20"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;