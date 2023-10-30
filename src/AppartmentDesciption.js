import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';
import Layout from './layout';
import Slideshow from './slideshow';
import './Slideshow.scss';
import './AppartmentDescription.scss';

// Importez les images des étoiles
import starActiveImage from './star-active 3.png';
import vectorImage from './Vector.png';

function generateStars(rating) {
  const stars = [];
  const totalStars = 5; // Nombre total d'étoiles

  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      // Si l'indice est inférieur à la note, afficher une étoile remplie
      stars.push(<img key={i} src={starActiveImage} alt="Star" />);
    } else {
      // Sinon, afficher une étoile vide
      stars.push(<img key={i} src={vectorImage} alt="Star" className="star-icon"/>);
    }
  }

  return stars;
}

function AppartementDescription() {
  const { id } = useParams(); // Utiliser le hook useParams pour obtenir les paramètres d'URL
  const selectedApartment = data.find((apartment) => apartment.id === id);

  return (
    <Layout>
      <Slideshow images={selectedApartment.pictures} />
      <div className="appartement-description">
        <div className="info-container">
          <h1 className="title">{selectedApartment.title}</h1>
          <h2 className="subtitle">{selectedApartment.location}</h2>

          <div className="tags-container">
            {selectedApartment.tags.map((tag, index) => (
              <div key={index} className="tag">
                <div className="tag-text">{tag}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="host-container">
          <div className="host-picture">
            <img src={selectedApartment.host.picture} alt="Host" />
          </div>
          <p className="host-name">{selectedApartment.host.name}</p>
        </div>
      </div>
          <div className="stars-container stars-right">
            {generateStars(parseInt(selectedApartment.rating))}
          </div>
    </Layout>
  );
}

export default AppartementDescription;
