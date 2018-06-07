import React, { Component } from 'react';
import Country from './Country';
import USCountry from '../../img/us-country.svg';
import ColombiaCountry from '../../img/colombia-country.svg';
import EspagneCountry from '../../img/espagne-country.svg';
import NewZelandeCountry from '../../img/new-zelande-country.svg';
import IcelandeCountry from '../../img/icelande-country.svg';
import MarocCountry from '../../img/maroc-country.svg';
import HorizontalRateLine from "./HorizontalRateLine";
import VerticalRateLine from "./VerticalRateLine";
import ModaleContainer from "../modaleContainer/ModaleContainer";

class Statistic extends Component {

  modaleContent = () => {
    return(
      <div className="modale-content modale-statistic">
        <div className="flex row between">
          <Country
            countryOne={'états-unis'}
            imageOne={USCountry}
            countryTwo={'colombie'}
            imageTwo={ColombiaCountry}
            genre="Drame"
          />
          <Country
            countryOne={'icelande'}
            imageOne={IcelandeCountry}
            countryTwo={'nouvelle zelande'}
            imageTwo={NewZelandeCountry}
            genre="Aventure"
          />
          <Country
            countryOne={'maroc'}
            imageOne={MarocCountry}
            countryTwo={'espagne'}
            imageTwo={EspagneCountry}
            genre="Action"
          />
        </div>
        <div></div>
        <div className="flex row between">
          <div className="modale-stat modale-stat-1">
            <p className="uppercase">Genres les plus tournés au Maroc</p>
            <HorizontalRateLine legende="Action" rate="70%"/>
            <HorizontalRateLine legende="Aventure" rate="60%"/>
            <HorizontalRateLine legende="drama" rate="40%"/>
            <HorizontalRateLine legende="Sci-Fi" rate="40%"/>
            <HorizontalRateLine legende="Thriller" rate="20%"/>
            <HorizontalRateLine legende="Biographie" rate="10%"/>
          </div>
          <div className="modale-stat modale-stat-2 flex column between">
            <div className="flex row center">
              <div className="vertical-rate-line-container flex row">
                <VerticalRateLine rate="100%"/>
                <VerticalRateLine color="#675009" rate="90%"/>
                <VerticalRateLine color="#36290f" rate="60%"/>
              </div>
              <div className="stat-rea-container flex column between">
                <div>
                  <p className="gothic-font">Top 3 des réalisateurs ayant tournés le plus de scènes au Maroc</p>
                </div>
                <div>
                  <p className="gothic-font">David Benioff</p>
                  <p className="gothic-font">Christopher McQuarrie</p>
                  <p className="gothic-font">Christopher Nolan</p>
                </div>
              </div>
            </div>
            <div>
              <p className="gothic-font">723</p>
              <p className="gothic-font">minutes ont été tournées au Maroc</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <ModaleContainer
        modaleActive={this.props.modaleActive}
        closeModale={this.props.closeModale}
        content={this.modaleContent()}
      />
    );
  }
}

export default Statistic;