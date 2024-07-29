import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionCount, setSubmissionCount] = useState(
        parseInt(localStorage.getItem('submissionCount')) || 0
    );
    const [isFormEnabled, setIsFormEnabled] = useState(true);

    useEffect(() => {
        localStorage.setItem('submissionCount', submissionCount.toString());
    }, [submissionCount]);

    useEffect(() => {
        const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
        if (lastSubmissionTime) {
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - lastSubmissionTime;
            const hoursPassed = timeDifference / (1000 * 60 * 60);

            if (hoursPassed >= 24) {
                setSubmissionCount(0);
                localStorage.setItem('submissionCount', '0');
                setIsFormEnabled(true);
            } else {
                setIsFormEnabled(false);
            }
        }
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const courseSelect = e.target.course;
        if (courseSelect.value === "Select One") {
            toast.error('Please select a valid course.');
            return;
        }

        if (isSubmitting) return;
        if (submissionCount >= 4) {
            toast.error('Form submission limit reached. Please try again after 24 hours.');
            return;
        }

        setIsSubmitting(true);

        emailjs.sendForm(
            'service_xyplnzm',
            'template_myd22wa',
            e.target,
            'zhX0LYJ5Mw8E_BjfL'
        )
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully!');
                setSubmissionCount(submissionCount + 1);
                if (submissionCount + 1 >= 4) {
                    localStorage.setItem('lastSubmissionTime', new Date().getTime().toString());
                    setIsFormEnabled(false);
                }
            })
            .catch((error) => {
                console.log(error.text);
                toast.error('Failed to send message, please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });

        e.target.reset();
    };

    const handleTelephoneChange = (e) => {
        const input = e.target;
        if (input.value.length > 10) {
            input.value = input.value.slice(0, 10);
        }
    };

    return (
        <div className="contact-form-container container-fluid text-white">
            <ToastContainer />
            <div className="row">
                <div className="col-md-4 contact-info">
                    <h2>CONTACT US</h2>
                    <div className="contact-detail">
                        <div className='address'>
                            <p>Address</p>
                            <p>Sukedhara, Kathmandu, Nepal</p>
                        </div>
                    </div>
                    <hr />
                    <div className="contact-detail">
                        <div>
                            <p>Phone</p>
                            <p>+977 9762782465</p>
                            <p>+977 9801482465</p>
                        </div>
                    </div>
                    <hr />
                    <div className="contact-detail">
                        <div>
                            <p>Email</p>
                            <p>info@ktsnepal.com</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="col-md-7">
                    <h2 className='msg'>Send Us a Message</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" className="form-control" id="fullName" name="fullName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="number"
                                className="form-control"
                                id="telephone"
                                name="telephone"
                                maxLength="10"
                                onInput={handleTelephoneChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="course">Which course are you interested in?</label>
                            <div className="select-wrapper">
                                <select className="form-control" id="course" name="course" required>
                                    <option value="">Select One</option>
                                    <option value="Caregiver / Aged Care">Caregiver / Aged Care</option>
                                    <option value="Barista">Barista</option>
                                    <option value="Bartender">Bartender</option>
                                    <option value="Commercial Cook/Baker">Commercial Cook/Baker</option>
                                    <option value="Waiter/Waitress">Waiter/Waitress</option>
                                    <option value="Housekeeping Cleaner">Housekeeping Cleaner</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting || submissionCount >= 4 || !isFormEnabled}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
