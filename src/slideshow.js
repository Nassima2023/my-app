import React, { useState } from 'react'; 
import './Slideshow.scss'; 
import ArrowLeft from './arrow_back_ios-24px 1.png'; 
import ArrowRight from './arrow_forward_ios-24px 1.png';
const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // J'initialise l'index de l'image actuelle

  // Fonction pour gérer le clic sur le bouton "Image précédente"
  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour gérer le clic sur le bouton "Image suivante"
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
          display: images.length > 1 ? 'block' : 'none', // J'ajuste l'affichage du bouton en fonction du nombre d'images
        }}
      >
        <img src={ArrowLeft} alt="previous" /> {/* J'affiche l'icône de la flèche gauche */}
      </button>

      <img src={images[currentImageIndex]} alt="" /> {/* J'affiche l'image actuelle de la liste d'images */}

      <button
        className="next"
        onClick={handleNextClick}
        style={{
          display: images.length > 1 ? 'block' : 'none', // J'ajuste l'affichage du bouton en fonction du nombre d'images
        }}
      >
        <img src={ArrowRight} alt="next" /> {/* J'affiche l'icône de la flèche droite */}
      </button>

      <p className="picture-counter">
        {currentImageIndex + 1} / {images.length} {/* J'affiche le numéro de l'image actuelle par rapport au nombre total d'images */}
      </p>
    </div>
  );
};

export default Slideshow;
