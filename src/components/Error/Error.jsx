// ErrorPage.js

import React from 'react';
import './Error.css'; // Import CSS file for styling

const ErrorPage = () => {
    return (
        <div className='error-container'>
            <div className='error-content'>
                <h1 className='error-heading'>Error 404 Not Found</h1>
                <p className='error-text'>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default ErrorPage;
