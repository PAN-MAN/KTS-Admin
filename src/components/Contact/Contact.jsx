import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';
import { Helmet } from 'react-helmet';
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {
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
            <div className={`courses-container ${isLoading ? 'hidden' : 'visible'}`}>
                <Helmet>
                    <title>Contact - Kathmandu Technical School</title>
                </Helmet>
                <div>
                    {/* <h1 className='register-here'>Register Here</h1> */}
                    <ContactForm />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Contact;