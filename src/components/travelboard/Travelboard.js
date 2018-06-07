import React, { Component } from 'react';
import closeArrow from '../../img/close-arrow.svg';

class Travelboard extends Component {

  render() {
    return (
      <div className="travelboard">
        <img className="close-arrow-travelboard pointer zoom" src={closeArrow} alt=""/>
        <div className="flex column between">
          <div>
            <p className="italic gothic-font">de <span>Séville</span> à <span>Majorque</span></p>
          </div>
          <ul>
            <li>
              <p className="cormorant-garamond-font">Séville, real Aleàzar</p>
              <p className="uppercase gothic-font">Game of throne</p>
              <p className="gothic-font">(tv show), science fiction fiction - action</p>
            </li>
            <li>
              <p className="cormorant-garamond-font">Séville, real Aleàzar</p>
              <p className="uppercase gothic-font">Game of throne</p>
              <p className="gothic-font">(tv show), science fiction fiction - action</p>
            </li>
            <li>
              <p className="cormorant-garamond-font">Séville, real Aleàzar</p>
              <p className="uppercase gothic-font">Game of throne</p>
              <p className="gothic-font">(tv show), science fiction fiction - action</p>
            </li>
            <li>
              <p className="cormorant-garamond-font">Séville, real Aleàzar</p>
              <p className="uppercase gothic-font">Game of throne</p>
              <p className="gothic-font">(tv show), science fiction fiction - action</p>
            </li>
          </ul>
          <div>
            <button className="uppercase pointer gothic-font">Ajouter à mes favoris</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Travelboard;