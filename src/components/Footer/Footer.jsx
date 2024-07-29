/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [showArrow, setShowArrow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className="footer text-center py-5 mt-5">
            <div className="container">
                <h1 className="display-6 fw-bold">Contact Us</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="contact-details">
                            <p className="fs-5">
                                <div className="phone" style={{ textDecoration: 'none', color: 'black' }}>
                                    <i className="fas fa-phone-alt me-3" style={{ textDecoration: 'none', color: '#2b3991', fontSize: 'smaller' }}></i>
                                    +977 01 5912297
                                </div>
                            </p>
                            <p className="fs-5">
                                <i className="fas fa-envelope me-3" style={{ textDecoration: 'none', color: '#2b3991' }}></i>
                                <a href="mailto:info@ktsnepal.com" target="_blank" style={{ textDecoration: 'none', color: 'black', fontSize: 'smaller' }}>
                                    info@ktsnepal.com
                                </a>
                            </p>
                            <p className="fs-5">
                                <i className="fas fa-map-marker-alt me-3 unique-location" style={{ textDecoration: 'none', color: '#2b3991' }}></i>
                                <a href="https://maps.app.goo.gl/rM3pUwdj9aKmL9cm9" target="_blank" style={{ textDecoration: 'none', color: 'black', fontSize: 'smaller' }}>
                                    Sukedhara, Kathmandu, Nepal
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="unique-navbar">
                    <nav className="d-flex justify-content-center mb-4">
                        <Link className="navi-link mx-3 footer-navi-link" to="/">Home</Link>
                        <Link className="navi-link mx-3 footer-navi-link" to="/alumni">Alumni</Link>
                        <Link className="navi-link mx-3 footer-navi-link" to="/courses">Courses</Link>
                        <Link className="navi-link mx-3 footer-navi-link" to="/blog">Blog</Link>
                        <Link className="navi-link mx-3 footer-navi-link" to="/contact">Contact</Link>
                        <Link className="navi-link mx-3 footer-navi-link" to="/news">News</Link>

                    </nav>
                </div>
                <div className="unique-copyright">
                    <p>Copyright © {new Date().getFullYear()} <b>
                        <Link to="/" className='unique-name'>Kathmandu Technical School</Link>
                    </b></p>
                </div>
            </div>
            {showArrow && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </div>
            )}
        </footer>
    );
};

export default Footer;