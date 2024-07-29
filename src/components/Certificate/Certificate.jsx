import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Certificate.css';
import Navbar from '../Navbar/Navbar';
import pdfFile from '../../img/Certificate-III-in-Individual-Support-Ageing-and-Disability_112023_Inno-1.pdf';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

function Certificate() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Certificate III in Individual Support - KTS</title>
            </Helmet>
            <Container fluid className="individual-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="individual-course-image">
                        <img src={require('../../img/Cert3.jpeg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="individual-course-details">
                        <h1>Certificate III in Individual Support (Ageing and Disability)</h1>
                        <div className="individual-underline"></div>
                        <div>
                            <p className="individual-course-description">
                                This course enhances your abilities in offering both physical and emotional aid to the elderly, focusing on care provision in community and residential environments.
                            </p>
                        </div>
                        <Button href={pdfFile} variant="primary" size="lg" className="thichne-kura">Download Course Details</Button>
                    </Col>
                    <Col>
                        <div>
                            <p className='individual-certificate'>
                                This <b>Australian-certified program</b>,
                                in collaboration with  <b>Kathmandu Technical School</b>
                                and in partnership with <b>Crown Institute of Business and Technology</b> , is tailored to enhance your skills in providing physical and emotional support to the elderly. It mirrors the roles of care workers in community and residential settings, where personalized plans are crafted to assist individuals dealing with aging or disability-related issues. Through this course, you’ll apply technical, theoretical,
                                and procedural knowledge to deliver exemplary support and care to vulnerable seniors.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Certificate;
