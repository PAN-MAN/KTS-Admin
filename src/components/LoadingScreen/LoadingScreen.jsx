import React from 'react';
import './LoadingScreen.css'; // Ensure the correct path to your CSS file
import logo from '../../img/KTS-logo.png'; // Adjust path to your logo image

const LoadingScreen = ({ isLoading }) => {
    return (
        <div className={`loading-screen ${isLoading ? 'visible' : ''}`}>
            <div className="loading-container">
                <img
                    src={logo}
                    alt="Loading..."
                    className="loading-image"
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
