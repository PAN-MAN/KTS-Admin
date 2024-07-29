import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faToolbox, faUserFriends, faHammer } from '@fortawesome/free-solid-svg-icons';
import './whyChoose.css';

const WhyChooseUs = () => {
    return (
        <div className="whyChoose-container">
            <Container className="my-5">
                <Row>
                    <Col className="col-12">
                        <div className="whyChoose-line-wrapper">
                            <h2 className="why-us-heading">WHY CHOOSE US</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="d-flex flex-column justify-content-center why-choose-us">
                        <p>At KTS, we offer quality and in-demand courses that equip you with sought-after skills. We improve your learning experience by focusing on competency-based learning. We provide you with the opportunity to master the skills you need to move ahead in your career.</p>
                        <p>The emphasis is on demonstrating profound understanding through application. Each student's learning experience is personalized by our trainers and teachers, who make sure that you have complete mastery of the course before graduating.</p>
                    </Col>
                    <Col md={6}>
                        <img src={require('../../img/classroom.jpg')} alt="Classroom" className="img-fluid" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12} className="d-flex flex-column align-items-start">
                        <div className="mb-3 d-flex align-items-center">
                            <FontAwesomeIcon icon={faUserGraduate} size="1x" style={{ color: '#2b3991' }} />
                            <h5 className="icon-text-spacing">Organizational Training</h5>
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <FontAwesomeIcon icon={faToolbox} size="1x" style={{ color: '#2b3991' }} />
                            <h5 className="icon-text-spacing">Job Placement</h5>
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <FontAwesomeIcon icon={faHammer} size="1x" style={{ color: '#2b3991' }} />
                            <h5 className="icon-text-spacing">Vocational Training</h5>
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <FontAwesomeIcon icon={faUserFriends} size="1x" style={{ color: '#2b3991' }} />
                            <h5 className="icon-text-spacing">Industry Expert Faculty</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyChooseUs;