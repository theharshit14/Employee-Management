import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Protected = (props) => {
    let auth = { 'token': typeof sessionStorage.getItem("userData") === 'string' }
    return (
        auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default Protected;
