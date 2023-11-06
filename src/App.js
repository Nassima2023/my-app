import React from 'react';
import Layout from './layout'; //  j'importe le layout 
import imgSource from './img.source.png';
import Banner from './banner'; // j'importe le composant Banner
import AppartementCard from './card'; // j'importe le composant Card
import data from './data.json'; // j'importe les données depuis le fichier JSON

function App() {
  const Appartements = data.slice(0, 20);

  return (
    <Layout>
      <div className="App">
        <Banner imageSrc={imgSource} altText="Image source" text="Chez vous, partout et ailleurs" />
        {/* Code qui Permet d'afficher la bannière */}
        
        
        <div className="card-container">
          {Appartements.map((appartement, index) => (
            <AppartementCard key={index} appartement={appartement} />
          ))}
          {
          // Je mappe les six premiers appartements et j'utilise le composant AppartementCard
          // J'attribue une clé unique à chaque carte avec key={index} pour suivre les éléments
          // J'envoie les données de l'appartement en tant que propriété "appartement" au composant AppartementCard
          }
        </div>
      </div>
    </Layout>
  );
}

export default App;
