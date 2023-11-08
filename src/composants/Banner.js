import React from 'react';
import '../styles/banner.scss';

const Banner = ({ imageSrc, altText, text }) => {
  return (
    <div className="image-container">
      <div className="banner">
        <img src={imageSrc} alt={altText} />
        <div className="banner-text">{text}</div>
      </div>
    </div>
  );
};

export default Banner;
