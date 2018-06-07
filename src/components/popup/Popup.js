import React from 'react';

const Popup = (props) => (
  <div className="popup-container">
    <div className="popup">
      <p className="gothic-font uppercase">Game of throne</p>
      <p className="cormorant-garamond-font italic popup-citation">« C'est à ses manières que l'on juge un homme. »</p>
      <p className="gothic-font popup-location-info">Mayfair, LONDON</p>
      <p className="gothic-font popup-episode-info">Saison 3, Épisode 4</p>
      <p className="gothic-font uppercase italic pointer">En savoir plus</p>
    </div>
    <span></span>
  </div>
);

export default Popup;