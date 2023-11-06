import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import data from './data.json';
import Layout from './layout';
import Slideshow from './slideshow';
import './Slideshow.scss';
import './AppartmentDescription.scss';
import Collapse from './collapse';
import './collapse2.scss'
import './NotFound'

// Importation des images des étoiles
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
  //  On récupère l'ID de l'appartement à partir des paramètres d'URL
  const { id } = useParams();

  // Rechercher l'appartement correspondant dans les données
  const selectedApartment = data.find((apartment) => apartment.id === id);

  // On obtient la fonction de navigation pour effectuer une redirection
  const navigate = useNavigate();

  // on utilise useEffect pour déclencher la redirection lorsque c'est nécessaire
  useEffect(() => {
    // Si l'appartement n'est pas trouvé, nous sommes redirigés vers la page "NotFound"
    if (!selectedApartment) {
      navigate('/NotFound');
    }
  }, [navigate, selectedApartment]);

  // Si l'appartement n'est pas trouvé, retourner null
  if (!selectedApartment) {
    return null;
  }

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

          <div className="stars-container ">
            {generateStars(parseInt(selectedApartment.rating))}
            {/* Génère les étoiles en fonction du rating de l'appartement du fichier data.json */}
          </div>

          <div className="appartment-description-collapse">

            {/* Premier Collapse pour la description  */}
            <Collapse title="Description" content={selectedApartment.description} className="custom-collapse" />
            
            {/* Deuxième Collapse pour les équipements */}
            <Collapse
              title="Équipements"
              content={
                <ul>
                  {selectedApartment.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
              className="custom-collapse"
            />
        </div>
          
    </Layout>
  );
}

export default AppartementDescription;
