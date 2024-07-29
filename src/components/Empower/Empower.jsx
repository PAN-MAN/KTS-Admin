import React from 'react';
import './Empower.css';

const MissionVision = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="mb-2 empower">EMPOWERING YOUTH</h1>
            <h1 className="mb-5 empower">EMPOWERING NATION</h1>

            <div className="row">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="unique-card p-3 h-100">
                        <div className="unique-card-body">
                            <div className="icon mb-3">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h1 className="unique-card-title">Our Mission</h1>
                            <hr className="divider" />
                            <p className="unique-card-text">
                                To train and nurture socially responsible, technically competent, and future-ready generation of youth through industry and job-specific training, courses, and opportunities led by industry leaders.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="unique-card p-3 h-100">
                        <div className="unique-card-body">
                            <div className="icon mb-3">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h5 className="unique-card-title">Our Vision</h5>
                            <hr className="divider" />
                            <p className="unique-card-text">
                                To build an empowering national and regional ecosystem where job creators and job seekers find their perfect fit in a demanding market.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="unique-card p-3 h-100">
                        <div className="unique-card-body">
                            <div className="icon mb-3">
                                <i className="fas fa-comment-dots"></i>
                            </div>
                            <h5 className="unique-card-title">Our Statement</h5>
                            <hr className="divider" />
                            <p className="unique-card-text">
                                Empowering people, Increasing employability, Driving the Economy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="unique-card p-3 h-100">
                        <div className="unique-card-body">
                            <div className="icon mb-3">
                                <i className="fas fa-atom"></i>
                            </div>
                            <h5 className="unique-card-title">Core Values</h5>
                            <hr className="divider" />
                            <p className="unique-card-text">
                                Excellence<br /><br />
                                Diversity<br /><br />
                                Inclusiveness<br /><br />
                                Respect<br /><br />
                                Innovation<br /><br />
                                Creativity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;
