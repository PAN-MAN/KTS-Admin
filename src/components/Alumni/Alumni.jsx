
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoadingScreen from '../LoadingScreen/LoadingScreen'; // Adjust path as necessary
import '../CaregiverAlumni/Alumni.css';

const Alumni = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjust time in milliseconds (e.g., 3000 for 3 seconds)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />

            <LoadingScreen isLoading={isLoading} />
            <div className={`alumni-container ${isLoading ? 'hidden' : 'visible'}`}>
                <Helmet>
                    <title>Alumni - Kathmandu Technical School</title>
                </Helmet>
                <div className='alumni-section'>
                    <h1 className='alumni-header'>ALUMNI LIST</h1>
                    <div className='year-section'>
                        <ul>
                            <Link className='seventy' to="/caregiver-alumni">
                                <li>Caregiver</li>
                            </Link>
                            <Link className='eighty' to="/barista-alumni">
                                <li>Barista</li>
                            </Link>
                            <Link className='eighty' to="/individual-support-alumni">
                                <li>Certificate III in Individual Support</li>
                            </Link>
                            <Link className='eighty' to="/bakery-alumni">
                                <li>Bakery</li>
                            </Link>
                            {/* Add more years as needed */}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Alumni;
