import React from 'react';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Quote.css';

const Quote = () => {
    return (
        <div className="quote-section">
            <div className="quote-container">
                <div className="quote-icon-left">
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                </div>
                <p className="quote-text">
                    We strive to provide skills advancement courses to youth that prepare them for employability in both national and global labor markets.
                </p>
                <div className="quote-icon-right">
                    <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                </div>
            </div>
        </div>
    );
};

export default Quote;