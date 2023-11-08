// Import des dépendances nécessaires à notre composant
import React, { useState } from 'react';
import '../styles/collapse.scss';
import arrow from '../icones/arrow_back_ios-24px 2.png'
import '../styles/collapse2.scss'

// Définition du composant Collapse
function Collapse({ title, content }) {
  // Utilisation de useState pour gérer l'état du Collapse
  const [isCollapsed, allIsCollapsed] = useState(true);

  // Fonction pour basculer l'état du Collapse
  const returnCollapse = () => {
    allIsCollapsed(!isCollapsed);
  };

  return (
    // Conteneur principal du Collapse
    <div className="collapse-container">
      <div

        // Élément du Collapse qui réagit au clic
        className={`collapse  ${isCollapsed ? '' : 'open'}`}
        onClick={returnCollapse} 
        >
        {title} {/* Affiche le titre du Collapse */}

        <div className={`collapse-arrow ${isCollapsed ? '' : 'open'}`}>
        {/* Icône de flèche pour indiquer l'état du Collapse */}
        <img src={arrow} alt="flèche collapse"/>
        </div>
        
      </div>

      {isCollapsed ? null : (
        // Contenu du Collapse, affiché uniquement s'il est ouvert
        <div className="collapsed-content">
            {content} {/* Affiche le contenu du Collapse */}
        </div>
      )}
    </div>
  );
}

export default Collapse; 
