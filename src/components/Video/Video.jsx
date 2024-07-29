import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import DesktopVideo from '../../vid/Homepage.mp4';
import MobileVideo from '../../vid/Mobile-Video.mp4';
import './Video.css';

const Videos = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [videoSource, setVideoSource] = useState(DesktopVideo);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 475) {
                setVideoSource(MobileVideo);
            } else {
                setVideoSource(DesktopVideo);
            }
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleMuteUnmute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    return (
        <div className="video-container">
            <video
                className="video"
                ref={videoRef}
                autoPlay
                muted
                loop
                onClick={handlePlayPause}
            >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="controls">
                <button className="button" onClick={handlePlayPause}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button className="button" onClick={handleMuteUnmute}>
                    <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                </button>
            </div>
        </div>
    );
};

export default Videos;
