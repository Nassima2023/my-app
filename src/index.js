import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about'; 
import NotFound from './NotFound'; 
import './data.json'
import AppartementDescription from './AppartmentDesciption';

// import Layout from './layout';


const root = createRoot(document.getElementById('root'));
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


