import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar/Navbar';
import About from '../About-Us/About';
import Video from '../Video/Video';
import WhyChoose from '../whyChoose/whyChoose';
import Quote from '../Quote/Quote';
import Footer from '../Footer/Footer';
import Speciality from '../Speciality/Speciality';
import Logo from '../Logo-Vid/Logo';
import Objective from '../Objective/Objective';
import Empower from '../Empower/Empower';
import Cards from '../Cards/Cards';
import ContactForm from '../ContactForm/ContactForm';
import Scroll from '../Scroll/Scroll';
import LoadingScreen from '../LoadingScreen/LoadingScreen'; // Adjust path as necessary
import FixedFooter from '../Fixed-Footer/Fixed-Footer'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjust time in milliseconds (e.g., 3000 for 3 seconds)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet><title>Kathmandu Technical School – A Journey to Excellence.</title></Helmet>
            <LoadingScreen isLoading={isLoading} />
            <Navbar />
            <br />
            <br />
            <br />
            <br />

            <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                <Video />
                <About />
                <WhyChoose />
                <Quote />
                <Speciality />
                <Logo />
                <Objective />
                <Empower />
                <Cards />
                <Scroll />
                <ContactForm />
                <FixedFooter />
                <Footer />
            </div>
        </>
    );
};

export default Home;
