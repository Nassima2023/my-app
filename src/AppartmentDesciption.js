import React from 'react';
import { useParams } from 'react-router-dom'; 
import data from './data.json'
import Layout from './layout';
import Slideshow from './slideshow';
import './Slideshow.scss'

function AppartementDescription() {
    
  const { id } = useParams(); // Utiliser le hook useParams pour obtenir les paramètres d'URL
  const selectedApartment = data.find(apartment => apartment.id === id);

  return (
    <Layout> 
    <div className="appartement-description">
      {/* Afficher ici les détails du logement en fonction de l'ID */}
      <Slideshow images={selectedApartment.pictures} />
      <h1>{selectedApartment.title}</h1>
    </div>
    </Layout>
  );
  
}

export default AppartementDescription;
