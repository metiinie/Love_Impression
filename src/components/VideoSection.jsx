import { useEffect, useRef } from 'react';
import './VideoSection.css';
import CoupleVideo from './Video/couple-video-10s.mp4';

// Placeholder poster image
const videoPoster = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23ffe6f2'/%3E%3Ctext x='400' y='225' font-family='Arial' font-size='20' text-anchor='middle' fill='%23cc0066'%3ESpecial Moments Video%3C/text%3E%3Ccircle cx='400' cy='225' r='50' fill='%23ff3399'/%3E%3C/svg%3E";

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={videoRef} className="video-section reveal">
      <div className="video-container">
        <h2 className="video-title">Special Moments</h2>
        <div className="video-wrapper">
          <video 
            className="special-video" 
            controls 
            preload="metadata"
            poster={videoPoster}
            src={CoupleVideo}>
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="video-description">
          Some of our most precious moments captured on video
        </p>
      </div>
    </section>
  );
};

export default VideoSection;