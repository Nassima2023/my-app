import React from 'react';
import '../styles/Card.scss';

function AppartementCard(props) {
  const { id, title, cover } = props.appartement;

  return (
    <a href={`/description/${id}`} className="card" style={{ backgroundImage: 'url(' + cover + ')' }}>
      <div className="card-title">
        {title}
      </div>
    </a>
  );
}

export default AppartementCard;
