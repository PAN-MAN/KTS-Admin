import React, { useState, useEffect } from 'react';
import './Scroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBullseye, faUniversalAccess, faHandshake, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretRight, faCaretLeft);

const events = [
    { title: 'Holistic Approach', description: 'We take a comprehensive approach to teaching where our educators address the emotional, social, ethical, and academic needs of students in an enabling learning environment.', icon: faCheckCircle },
    { title: 'Result Oriented', description: 'We provide relevant training which is contextualized and purposely tailored to the learner or community’s needs and goals. Our courses ensure skills, competency, and employability.', icon: faBullseye },
    { title: 'Inclusivity', description: 'We provide real learning opportunities for groups who have traditionally been excluded. KTS provides an environment where all students feel an extended sense of belonging.', icon: faUniversalAccess },
    { title: 'Employer Engaged', description: 'We actively involve potential employers who mentor and directly engage our students through hands-on activities and mentorship in real work environments.', icon: faHandshake },
    { title: 'Market Oriented', description: 'Our courses are based on and driven by real-time and future market needs. Every season we introduce courses that are market-, jobs-, and industry-oriented.', icon: faChartLine }
];

const Scroll = () => {
    const [scrollColor, setScrollColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            if (position > 100) {
                setScrollColor(true);
            } else {
                setScrollColor(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`scrolling ${scrollColor ? 'scrolled' : ''}`}>
            <h1 className='app'>OUR APPROACH</h1>
            <h5 className='skill'>Skill is the new currency</h5>
            <br />

            <div className="timeline">
                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-icon">
                            <FontAwesomeIcon icon={event.icon} color="white" size="2x" />
                        </div>
                        <div className="timeline-content">
                            <h4>{event.title}</h4>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scroll;
