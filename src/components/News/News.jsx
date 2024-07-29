import React from 'react';
import Navbar from '../Navbar/Navbar';
import './News.css';
import image1 from '../../img/news-1.png';
import image2 from '../../img/news-2.png';
import { Helmet } from 'react-helmet'
const News = () => {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <Helmet>
                <title>
                    News - Kathmandu Technical School
                </title>
            </Helmet>
            <h1 className='news-heading'>News / Articles</h1>
            <div className='news-container'>
                <div className='news-item'>
                    <img src={image1} alt="News 1" id='news-img-one' />
                    <h2 className='news-title'>आईएमई समुहले काठमाडौ टेक्निकल स्कुल खोल्यो</h2>
                </div>
                <div className='news-item'>
                    <img src={image2} alt="News 2" id='news-img-two' />
                    <h2 className='news-title'>टेक्निकल स्कुल चलाउँदै आईएमई समुह</h2>
                </div>
            </div>
        </>
    );
}

export default News;
