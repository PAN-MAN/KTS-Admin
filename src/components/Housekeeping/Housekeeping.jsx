import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import './Housekeeping.css';

function Housekeeping() {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <Helmet>
                <title>Housekeeping - KTS</title>
            </Helmet>
            <Container fluid className="unique-house-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="unique-house-course-image">
                        <img src={require('../../img/house.jpg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="unique-house-course-details">
                        <h1>Housekeeping</h1>
                        <div className="unique-house-underline"></div>
                        <div>
                            <p className="unique-house-course-description">
                                The Housekeeping/Cleaner Training Program provides instruction in cleaning techniques and maintaining hygiene standards for various settings.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className='unique-house-certificate'>
                                The Housekeeping/Cleaner Training Program offers a comprehensive curriculum aimed at imparting expertise in cleaning methodologies and upholding hygiene standards across diverse environments. Through a combination of hands-on demonstrations and theoretical modules, participants gain proficiency in sanitation protocols, surface maintenance, and the proper use of cleaning equipment and supplies. Under the guidance of seasoned mentors, students develop a keen eye for detail and efficiency, mastering techniques essential for ensuring cleanliness and orderliness in residential, commercial, and hospitality settings. Upon completion of the program, graduates emerge as skilled cleaners equipped to deliver exceptional service in maintaining pristine environments conducive to health and well-being.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Housekeeping;
