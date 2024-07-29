import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import './Cook.css';

function Cook() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Commercial Cook / Baker - KTS</title>
            </Helmet>
            <Container fluid className="unique-cook-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="unique-cook-course-image">
                        <img src={require('../../img/cook.jpg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="unique-cook-course-details">
                        <h1>Commercial Cook / Baker <br></br>
                        </h1>
                        <div className="unique-cook-underline"></div>
                        <div>
                            <p className="unique-cook-course-description">
                                The Commercial Chef and Baker program is a culinary training course designed for aspiring professionals in the food industry.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className='unique-cook-certificate'>
                                The Commercial Chef and Baker program offers a thorough training experience for those aspiring to succeed in the culinary world. This comprehensive course blends theoretical learning with hands-on practice, covering everything from ingredient selection to cooking and baking techniques, menu planning, kitchen safety, and customer service. Led by seasoned instructors, students have the chance to unleash their creativity and perfect their skills, preparing them for rewarding careers in commercial kitchens and bakeries.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Cook;
