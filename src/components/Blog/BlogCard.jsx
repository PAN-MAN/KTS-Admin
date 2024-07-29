import React from 'react';
import './BlogCard.css';

const BlogCard = ({ image, title, description }) => {
    return (
        <div className="card blog-card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{truncateDescription(description, 100)}</p>
                <a href="/" className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

export default BlogCard;
