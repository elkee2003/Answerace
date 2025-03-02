import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MediaGrid.css';

const MediaGrid = () => {
    const mediaGallery = [
        "/result4.jpg",
        "/result9.jpg",
        "/result5.jpg",
        "/result6.jpg",
    ]
  const navigate = useNavigate(); 

  return (
    <div 
        id='mediagrid'
        className="gridContainerWrapper"
    >
        <div className="gridContainer">
        {mediaGallery.map((pic, index) => (
            <button
            key={index}
            onClick={() =>
                navigate(`/gallery/${index}`, {
                state: { images: mediaGallery, selectedIndex: index }, // Pass images as state
                })
            }
            className="gridItem"
            >
                <div className="mediaImageContainer">
                <img src={pic} alt={`Gallery ${index}`} className="mediaImage" />
                </div>
            </button>
        ))}
        </div>
    </div>
  );
};

export default MediaGrid;