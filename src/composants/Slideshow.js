import React, { useState } from 'react';
import '../styles/Slideshow.scss';
import ArrowLeft from '../icones/arrow_back_ios-24px 1.png';
import ArrowRight from '../icones/arrow_forward_ios-24px 1.png';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      // Si l'index précédent est égal à 0 (première image), 
      // passer à l'image la plus à droite (images.length - 1),
      // sinon, passer à l'image précédente (index précédent - 1)

    );
  };

  return (
      <div className="slideshow"> {/* Div du diaporama */}
        <button
          className="previous"
          onClick={handlePreviousClick}
          style={{
            display: images.length > 1 ? 'block' : 'none',
          }}
        >
          <img src={ArrowLeft} alt="previous" className="previous-cover"/> {/* Bouton "Image précédente" */}
        </button>

        <img src={images[currentImageIndex]} alt="" /> {/* Image actuelle du diaporama */}

        <button
          className="next "
          onClick={handleNextClick}
          style={{
            display: images.length > 1 ? 'block' : 'none',
          }}
        >
          <img src={ArrowRight} alt="next" className='next-cover' /> {/* Bouton "Image suivante" */}
        </button>
      

      <p className="picture-counter">
        {currentImageIndex + 1} / {images.length} {/* Numéro de l'image actuelle par rapport au nombre total d'images */}
      </p>
    </div>
  );
};

export default Slideshow;
