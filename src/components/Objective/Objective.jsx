// src/ObjectiveAndWhatWeDo.js
import React from 'react';
import styles from './ObjectiveAndWhatWeDo.module.css';

const Objective = () => {
    return (
        <div className={`container my-5 ${styles.container}`}>
            <div className="row">
                {/* Objective Section */}
                <div className={`col-md-6 ${styles.objectiveSection}`}>
                    <div className={styles.overlay}>
                        <h2>Objective</h2>
                        <p>At KTS we strive to provide skills advancement courses to youth that prepares them for employability in both national and global labor markets.</p>
                    </div>
                </div>
                {/* What We Do Section */}
                <div className={`col-md-6 ${styles.whatWeDoSection}`}>
                    <div className={styles.overlay}>
                        <h2>What We Do</h2>
                        <ul>
                            <li>Conduct Training Need Assessment (TNA) for potential employment opportunities</li>
                            <li>Develop appropriate courses and curriculums that build long-term competency</li>
                            <li>Conduct holistic skills development training</li>
                            <li>Support graduates in job placement or self-employment opportunities</li>
                            <li>Provide mentoring and/or incubation services for training graduates</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Objective;