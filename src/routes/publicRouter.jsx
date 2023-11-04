import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = ({ isAuthenticate, redirectPath = '/feed', children }) => {
    console.log(isAuthenticate);
    if (isAuthenticate) return <Navigate to={redirectPath} />
    return (
        <div>{children ? children : <Outlet />}</div>
    )
}

export default PublicRoutes