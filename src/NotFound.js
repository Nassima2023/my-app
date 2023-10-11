// NotFound.js
import React from 'react';
import Layout from './layout';

function NotFound() {
  return (
    <Layout>
    <div>
      <h2>Erreur 404 - Page non trouvée</h2>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
    </div>,
    <div>
        <p> Retourner sur la page d'accueil </p>
    </div>
    </Layout>
  );
}

export default NotFound;
