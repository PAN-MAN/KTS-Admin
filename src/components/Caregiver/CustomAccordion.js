// src/components/CustomAccordion/CustomAccordion.js
import React, { useState } from 'react';
import './CustomAccordion.css';

const CustomAccordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="custom-accordion">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`custom-accordion-item ${activeIndex === index ? 'active' : ''}`}
                >
                    <button className="custom-accordion-header" onClick={() => handleToggle(index)}>
                        {item.title}
                    </button>
                    {activeIndex === index && (
                        <div className="custom-accordion-body">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;
