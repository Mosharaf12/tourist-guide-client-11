import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const{user,loading}= useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return(<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>)
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;

    
};

export default PrivateRoute;