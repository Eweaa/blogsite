
import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";


export default function PrivateRoute({children}) {
    const {currentUser} = useAuth()
    console.log(currentUser)
    return currentUser ? children : <Navigate to='/login'/>
}
