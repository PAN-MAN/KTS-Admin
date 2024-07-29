import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth'; // Adjust path as necessary

const PrivateRoute = ({ element: Element, ...rest }) => {
    return (
        <Route
            {...rest}
            element={isAuthenticated() ? <Element /> : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
