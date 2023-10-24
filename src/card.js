import React from 'react';
import './Card.scss';

function AppartementCard(props) {
  const { id, title, cover} = props.appartement;
  // Je déstructure les propriétés "id," "title," du composant "AppartementCard" à partir des "props" passées.

    return (
      
        <div className="card" style={{backgroundImage: 'url(' + cover + ')'}}>
          
          <a href={`/description/${id}`} className="card-title">
            {title}
            {/* J'affiche le nom de l'appartement (stocké dans "title") en tant que lien cliquable */}
          </a>

        </div>
      
    );
  }

export default AppartementCard;
