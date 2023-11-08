import React from 'react';  // Importation de la bibliothèque React
import './styles/App.scss';
import App from './composants/App'; 
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; // Importation de createRoot pour initialiser l'application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Importation des composants de React Router pour gérer la navigation
import About from './composants/about'; 
import NotFound from './composants/NotFound'; 
import './data.json'
import AppartementDescription from './composants/AppartmentDesciption';

const root = createRoot(document.getElementById('root'));
// Crée la racine de l'application React et la lie à l'élément DOM ayant l'ID 'root'.
root.render(
  <React.StrictMode>
    {/* <Layout/> */}
    <Router>
      <Routes>

        {/* Route pour la page d'accueil (App) */}
        <Route path="/" element={<App />} />
        {/* Route pour la page "About" */}
        <Route path="/about" element={<About />} />
        <Route path="/description/:id" element={<AppartementDescription />} />
        {/* Route par défaut pour la page "NotFound" */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();


