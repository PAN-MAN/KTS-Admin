import React, { useState } from 'react';
import ReactPlayer from 'react-player'; // Import ReactPlayer
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook
import './Logo.css'; // Import the CSS file

const LogoAnimation = () => {
    const [isPlaying, setIsPlaying] = useState(false); // State to control playback
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.5, // Adjust this value to control when the video should start playing (0.5 means 50% in view)
        triggerOnce: false // Keep checking the visibility
    });

    // Update playback state when visibility changes
    React.useEffect(() => {
        if (inView) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    }, [inView]);

    const videoUrl = require('../../vid/LOGO-ANIMATION.mp4'); // Assuming video is in the same folder

    return (
        <div ref={ref} className="logo-animation-container">
            <ReactPlayer
                url={videoUrl}
                playing={isPlaying} // Control playback based on state
                loop={true} // Set loop to true for continuous playback
                muted={true} // Set muted to true for silent playback
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default LogoAnimation;
