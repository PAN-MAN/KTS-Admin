// src/components/CaregiverCard.js
import React from 'react';
import './Cards.css'; // Update the CSS file name
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandHoldingHeart, faHandsHelping, faCocktail } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Tabs = () => {
    return (
        <div className="caregiver-tabs-container">
            <h1 className='card-header'>CURRENT COURSES</h1> {/* Use h1 and center styling in JSX */}
            <div className="tabs-wrapper">
                <div className="tab caregiver-tab">
                    <div className="tab-header text-white">
                        <h3 className='tab-head'>Caregiver/Aged Care</h3>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faHandHoldingHeart} />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/Caregiver.jpg')} className="tab-img-top img-fluid" alt="Caregivers" />
                        <Link to="caregiver" className="btn btn-primary btn-lg">Learn More</Link>
                    </div>
                </div>
                <div className="tab caregiver-tab">
                    <div className="tab-header text-white">
                        <h3 className='tab-head'>Barista</h3>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faCoffee} />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/Barista.jpg')} className="tab-img-top img-fluid" alt="Barista" />
                        <Link to="/barista" className="btn btn-primary btn-lg">Learn More</Link>
                    </div>
                </div>
            </div>
            {/* Add the second row here */}
            <div className="tabs-wrapper">
                <div className="tab caregiver-tab">
                    <div className="tab-header  text-white">
                        <h3 className='tab-head'>Certificate III in Individual Support</h3>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faHandsHelping} />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/Cert.jpg')} className="tab-img-top img-fluid" alt="Caregivers" />
                        <Link to="individual-support" className="btn btn-primary btn-lg">Learn More</Link>
                    </div>
                </div>
                <div className="tab caregiver-tab">
                    <div className="tab-header text-white">
                        <h3 className='tab-head'>Bartender</h3>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faCocktail} />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/Bartender.jpg')} className="tab-img-top img-fluid" alt="Bartender" />
                        <Link to="bartender" className="btn btn-primary btn-lg">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;