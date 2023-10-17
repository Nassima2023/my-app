import React from 'react';
import './card.scss';

const Card = ({ imageSrc, altText, text }) => {
  return (
    <div className="image-container">
      <div className="card">
        <img src={imageSrc} alt={altText} />
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
