import React from 'react';
import Layout from './layout';
import imgSource2 from './imgSource2.png';
import Banner from './banner';
import Collapse from './collapse'; 
function About() {
  return (
    <Layout>
      <div>
        <Banner imageSrc={imgSource2} altText="Image source 2" />
      </div>

      <div className='collapse-gap'>
      <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes " />
      <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme" />
      <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme" />
      <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que es standards sont bien respectées. Nous organisons égalemet des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>

    </Layout>
  );
}

export default About;
