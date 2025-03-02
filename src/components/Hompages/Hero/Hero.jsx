import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Hero.css";

// Custom hook to check screen width
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
  
    // useEffect to check media query to display background images
    useEffect(() => {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event) => setMatches(event.matches);
  
      mediaQueryList.addEventListener("change", listener);
      return () => mediaQueryList.removeEventListener("change", listener);
    }, [query]);
  
    return matches;
}

const Hero = () => {

    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(0);

     // Detect screen size using multiple queries
    const isLargeScreen = useMediaQuery("(min-width: 1100px)");
    const isMediumScreen = useMediaQuery("(min-width: 500px) and (max-width: 1099px)");
    const isSmallScreen = useMediaQuery("(min-width: 250px) and (max-width: 499px)");

    const largeScreenImages = [
        "/answerbarbing.jpg",
        "/result4.jpg",
        "/result9.jpg",
        "/result5.jpg",
        "/result6.jpg",
    ];

    const mediumScreenImages = [
        "/answerbarbing.jpg",
        "/result4.jpg",
        "/result9.jpg",
        "/result5.jpg",
        "/result6.jpg",
    ]

    const smallScreenImages = [
        "/answerbarbing.jpg",
        "/result4.jpg",
        "/result9.jpg",
        "/result5.jpg",
        "/result6.jpg",
    ]

    // Choose images based on screen size
    let images;
    if (isLargeScreen) {
        images = largeScreenImages;
    } else if (isMediumScreen) {
        images = mediumScreenImages;
    } else if (isSmallScreen) {
        images = smallScreenImages;
    } else {
        images = [];
    }

    // Function to change the image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % images.length); // Loop through images
        }, 7000); // 5000ms = 7 seconds
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div
        id='hero'
        className="hero-background"
        style={{
            backgroundImage: `url(${images[currentImage]})`,
        }} 
    >
        {/* Writ up section */}
        <div className='writeup-container'>
            Looking for a fresh, clean cut? You've found the right barber! I'm Answerace, a skilled professional dedicated to giving you the perfect look. Whether you need a crisp fade, a classic cut, or expert beard grooming, I make sure every client leaves with confidence.
        </div>

        {/* Button container */}
        <div className="hero-book-session-container">
            <a 
                href="https://www.fresha.com/book-now/l6bt7azy/all-offer?id=493091&share&pId=460566" 
                className="hero-button" 
                target="_blank" 
                rel="noopener noreferrer"
            >
            Book Session
            </a>
        </div>

        {/* Social Media accounts */}
        <div className='hero-socialmedia-container'>
            <a 
                href="https://www.instagram.com/answer_ace?igsh=djJ6OGhqdmVzNGdx" 
                // className="hero-button" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaInstagram className='social-media-icon' />
            </a>
            <a 
                href="https://x.com/answer_ace" 
                // className="hero-button" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaXTwitter className='social-media-icon' />
            </a>
        </div>
    </div>
  )
}

export default Hero
