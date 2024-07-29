import React from 'react';
import './Speciality.css';

const OurSpeciality = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 unique-speciality">
                    <h1 className="text-center-header mb-5">OUR SPECIALITY</h1>
                    <div className="d-flex align-items-center mb-2">
                        <h3>Learn Skills</h3>
                    </div>
                    <p>
                        Acquire skills that make you job-ready across industries, whether you are an individual, an organization, or a government body - get the training you need for yourself and your workforce to succeed efficiently.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                        <h3>Industry Experts</h3>
                    </div>
                    <p>
                        Our teachers are individuals with multitude of experience in the said profession. Our programmes will ensure that this skills training contributes to the end goal of employment.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                        <h3>Thriving Outcomes</h3>
                    </div>
                    <p>
                        We aim to create skilled individuals and get exponential business outcomes. In just 3-6 months, you'll have the abilities you need to advance your career.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                        <h3>Earn Certificates</h3>
                    </div>
                    <p>
                        Get industry-recognized certificates validating your skills and knowledge. We provide education and training with the job in mind and help develop your job skills.
                    </p>
                </div>
                <div className="col-md-6">
                    <div className="speciality-images">
                        <img src={require('../../img/garden.jpeg')} alt="Outdoor Scene" className="img-fluid mb-4" />
                        <img src={require('../../img/group.jpg')} alt="Industry Experts" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSpeciality;