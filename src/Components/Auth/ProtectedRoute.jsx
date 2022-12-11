import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

const ProtectedRoute = ({ children }) => {

    const { user } = useAuth();
    console.log(user, 'is Authenticated');
    if (!user) {
        return <Navigate to="/accounts/login" ></Navigate>;
    }
    if (!user.username) {

    }
    return children;
};

export default ProtectedRoute;