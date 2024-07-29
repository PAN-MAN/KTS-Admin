// Blogs.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import BlogCard from './BlogCard.jsx';
import './Blogs.css';

const Blogs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const loadBlogs = () => {
            const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
            setBlogs(storedBlogs);
            setIsLoading(false);
        };
        loadBlogs();
    }, []);

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <LoadingScreen isLoading={isLoading} />
            <div className={`blogs-container ${isLoading ? 'hidden' : 'visible'}`}>
                <Helmet>
                    <title>Blogs - Kathmandu Technical School</title>
                </Helmet>

                <div className="container">
                    <h1 className='kts-blogs'>KTS BLOGS</h1>
                    <div className="row">
                        {blogs.map(blog => (
                            <div className="col-md-4" key={blog.id}>
                                <BlogCard
                                    image={blog.image}
                                    title={blog.title}
                                    description={blog.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Blogs;
