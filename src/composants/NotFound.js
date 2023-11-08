import React from 'react';
import Layout from '../composants/Layout';
import '../styles/NotFound.scss'; 

function NotFound() {
  return (
    <Layout>
      <div className="centered">
        <h1 className="big-404">404</h1>
        <p className="oups-text">Oups! La page que vous demandez n'existe pas.</p>
        <p className="return-link" onClick={() => window.location.replace('/')}>
          Retourner sur la page d’accueil
        </p>
        {/* Lorsque l'utilisateur clique sur ce lien, il est redirigé vers la page d'accueil (URL de la page d'accueil du site). */}
      </div>
    </Layout>
  );
}

export default NotFound;
