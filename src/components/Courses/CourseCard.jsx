/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './CourseCard.css';
import { Link } from 'react-router-dom';

const CardComponent = ({ image, title, description, link }) => {
    return (
        <div className="col-md-6 mb-4 d-flex justify-content-center">
            <div className="card h-100" style={{ width: '90%' }}>
                <div className="card-img-top" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="card-body bg-primary text-white">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={link} className="course-button">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
