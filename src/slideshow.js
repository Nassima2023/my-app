// Slideshow.js
import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <button
        className="previous"
        onClick={handlePreviousClick}
        style={{
          display: images.length > 1 ? 'block' : 'none',
        }}
      >
        Image précédente
      </button>
    
        <img src={images[currentImageIndex]} alt="" />

      <button
        className="next"
        onClick={handleNextClick}
        style={{
          display: images.length > 1 ? 'block' : 'none',
        }}
      >
        Image suivante
      </button>
    </div>
  );
};

export default Slideshow;
