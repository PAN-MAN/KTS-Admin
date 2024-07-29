import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import './Water.css';

function Housekeeping() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Waiter - KTS</title>
            </Helmet>
            <Container fluid className="unique-waiter-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="unique-waiter-course-image">
                        <img src={require('../../img/waiter.jpg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="unique-waiter-course-details">
                        <h1>Waiter</h1>
                        <div className="unique-waiter-underline"></div>
                        <div>
                            <p className="unique-waiter-course-description">
                                The Waiter/Waitress Course provides training in customer service and restaurant operations, preparing individuals for careers in the hospitality industry.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className='unique-waiter-certificate'>
                                The Waiter/Waitress Course is a comprehensive training program designed to equip individuals with the skills and knowledge necessary for excelling in customer service and restaurant operations. Through a blend of practical exercises and theoretical learning, students delve into the intricacies of food and beverage service, table etiquette, order management, and guest satisfaction. Led by experienced instructors, participants learn to navigate the fast-paced and dynamic environment of the hospitality industry with confidence and finesse. Upon completion of the course, graduates emerge as adept servers, poised to deliver exceptional dining experiences in various establishments ranging from casual eateries to fine dining establishments.
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
