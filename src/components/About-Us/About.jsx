import React from 'react';
import './About.css'; // Custom CSS for additional styling
import brochure from '../../pdf/Brochures.pdf';

function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="image-line-wrapper">
                            <h2 className="about-us-heading">ABOUT US</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={require('../../img/building.jpg')} alt="Building" className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <p>The job market is evolving and changing quicker than ever before and so should you. At times like these, it is natural for both the job providers and job seekers to experience skill gaps.</p>
                        <p>At KTS, we work towards solving this very problem. We have identified skill gaps across various industries and curated courses that train, empower, and equip our learners to take on the world!</p>
                        <p>We provide courses that offer foundational skills, core skills, and specific skills to individuals so that they can easily fit into institutions within specific industries.</p>
                        <div className="brochure">
                            <a className="btn-download" href={brochure} download="KTS_Brochure.pdf">Download our Brochure</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
