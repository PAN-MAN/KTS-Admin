import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Caregiver.css';
import Navbar from '../Navbar/Navbar';
import pdfFile from '../../img/Caregiver-Course-2079.pdf';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import CustomAccordion from './CustomAccordion';

const accordionItems = [
    {
        title: 'Environment',
        content: 'Trainees learn to create and maintain a conducive environment for caregiving. This involves understanding safety protocols, creating a comfortable atmosphere for care recipients, and adapting to different settings such as homes, hospitals, or care centers.',
    },
    {
        title: 'Health and Sanitation',
        content: 'A crucial aspect of caregiver training is educating individuals on maintaining a clean and sanitary environment. Trainees learn about hygiene practices, infection control, and the importance of promoting overall health and well-being.',
    },
    {
        title: 'Nutrition',
        content: 'Caregivers are trained to provide appropriate nutrition based on the needs of their care recipients. This includes meal planning, dietary restrictions, and ensuring that individuals under their care receive balanced and nourishing meals.',
    },
    {
        title: 'Emergency and First Aid',
        content: 'Caregivers are trained to respond effectively in emergencies and administer first aid when necessary, ensuring the safety and well-being of those under their care.',
    },
    {
        title: 'Hygienic Care',
        content: 'This involves training in personal care and hygiene practices for care recipients. Caregivers learn how to assist with activities of daily living, maintain personal cleanliness, and ensure the dignity and comfort of those under their care.',
    },
];

function Caregiver() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Caregiver Course - KTS</title>
            </Helmet>
            <Container fluid className="caregiver-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="caregiver-course-image">
                        <img src={require('../../img/Caregiver.jpg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="caregiver-course-details">
                        <h1>Caregiver Course</h1>
                        <div className="caregiver-underline"></div>
                        <div>
                            <p className="caregiver-course-description">
                                Devoting yourself to the service and welfare of others is a wonderful act, that's why I chose to become a Caregiver.
                            </p>
                        </div>
                        <Button href={pdfFile} variant="primary" size="lg" className="caregiver-download-button">Download Course Details</Button>
                    </Col>
                    <Col>
                        <div>
                            <p className='caregiver-certificate'>
                                Caregiver training is a comprehensive program designed to cultivate competent individuals capable of fulfilling the demands of the caregiving profession. The primary objective is to impart knowledge, skills, and attitudes essential for effective caregiving. The training encompasses various critical aspects to ensure that the trainees are well-rounded and capable of addressing diverse needs in different caregiving settings.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <CustomAccordion items={accordionItems} />
            </Container>
            <Row className="caregiver-card-row">
                <Col md={4} sm={6} className="mb-4">
                    <div className="caregiver-card p-3 h-100">
                        <div className="caregiver-card-body">
                            <div className="icon mb-3">
                                {/* Icon Here */}
                            </div>
                            <h1 className="caregiver-card-title">Why?</h1>
                            <hr className="caregiver-divider" />
                            <div className="caregiver-card-text">
                                <ul>
                                    <li><b>Enhanced Skills:</b> <br />
                                        Caregiver courses improve abilities in safety, hygiene, healthcare, and essential areas.</li>
                                    <li><b>Improved Engagement:</b> <br />
                                        Training fosters better understanding and empathy, enhancing effective caregiving.</li>
                                    <li><b>Career Advancement:</b> <br />
                                        Opportunities for growth, including paid orientation and ongoing training, contribute to professional development.</li>
                                    <li><b>Positive Contribution:</b> <br />
                                        Caregivers contribute positively by fostering dignity and kindness in relationships.</li>
                                    <li><b>Empowerment:</b> <br />
                                        Professional training empowers caregivers, boosting job satisfaction.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} className="mb-4">
                    <div className="caregiver-card p-3 h-100">
                        <div className="caregiver-card-body">
                            <div className="icon mb-3">
                                {/* Icon Here */}
                            </div>
                            <h1 className="caregiver-card-title">Who?</h1>
                            <hr className="caregiver-divider" />
                            <div className="caregiver-card-text">
                                <b>Target Group:</b> <br />
                                <ul>
                                    <li>Caregiver courses improve abilities in safety, hygiene, healthcare, and essential areas.</li>
                                </ul>

                                <b>Focus of Interest:</b> <br />
                                <ul>
                                    <li>Planning for abroad studies</li>
                                    <li>Seeking opportunities for foreign employment</li>
                                    <li>Aspiring to work in the caregiving sector</li>
                                </ul>

                                <b>Entrepreneurial Aspirations:</b> <br />
                                <ul>
                                    <li>Establishing daycare centers</li>
                                    <li>Creating senior citizen support homes</li>
                                    <li>Venturing into the establishment of rehabilitation centers and similar enterprises</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4} sm={6} className="mb-4">
                    <div className="caregiver-card p-3 h-100">
                        <div className="caregiver-card-body">
                            <div className="icon mb-3">
                                {/* Icon Here */}
                            </div>
                            <h1 className="caregiver-card-title">How?</h1>
                            <hr className="caregiver-divider" />
                            <div className="caregiver-card-text">
                                <b>Course Structure:</b> <br />
                                <ul>
                                    <li>80% Practical Classes</li>
                                    <li>20% Theory Classes</li>
                                </ul>

                                <b>Enriching Experience:</b> <br />
                                <ul>
                                    <li>Work with Patients in Care Homes: Gain practical experience, developing empathy and communication skills by working directly with patients in care homes.</li>
                                </ul>

                                <b>Access to High-Quality Equipment:</b> <br />
                                <ul>
                                    <li>Utilize state-of-the-art medical equipment during training to confidently handle caregiving scenarios.</li>
                                </ul>

                                <b>Standard-Grade Medical Equipment:</b> <br />
                                <ul>
                                    <li>Familiarize yourself with industry-standard tools, essential for delivering quality care.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Footer />
        </>
    );
}

export default Caregiver;
