import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../img/facebook.svg';
import TwitterIcon from '../img/twitter.svg';
import InstagramIcon from '../img/instagram.svg';
import Dashboard from '../components/dashboard/Dashboard';
import Statistic from '../components/statistic/Statistic';
import Popup from '../components/popup/Popup';
import Galery from '../components/galery/Galery';
import HomeIcon from '../img/home-icon.svg';
import Travelboard from '../components/travelboard/Travelboard';
import Datas from '../datas/datas.json';
import MarkerIcon from '../img/marker.png';
import Axios from 'axios';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";
import MapOptions from "../components/map/MapStyles";

const MapComponent = compose (
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/img/js?key=AIzaSyBpCUOokU42fwtECqAAr_5Hf5swR3R6fvE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={4.25}
    defaultCenter={{ lat: 47.9042276, lng: 3.8181689 }}
    options={MapOptions}
  >
    {props.markers}
  </GoogleMap>
);

class Map extends Component {

  state = {
    dashboardTitle: '',
    dashboardActive: '',
    activeOption: true,
    modaleStatisticActive: false,
    modaleGaleryActive: false,
    markers: [],
    datas: []
  }

  componentDidMount() {
    this.setMarkers();

    Axios.get('https://guillaumeduclos.fr/datas.json', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(function (response) {
      console.log('response is : ' + response.data);
      this.setState({datas: response});
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.headers);
      }
      else if (error.request) {
        console.log(error.request);
      }
      else {
        console.log(error.message);
      }
      console.log(error.config);
    });
  }

  setDashboardContent = (e, title) => {
    this.setState({dashboardTitle: title});
    this.setState({dashboardActive: 'dashboardActive'});
    this.setState({activeOption: false});
  }

  closeDashboard = () => {
    this.setState({activeOption: true});
    this.setState({dashboardActive: 'dashboardInactive'});
  }

  openModale = (modale) => {
    this.setState({
      modaleStatisticActive: false,
      modaleGaleryActive: false
    });
    switch (modale) {
      case 'statistic':
        this.setState({modaleStatisticActive: true});
        break;
      case 'moviesGalery':
        this.setState({modaleGaleryActive: true});
        break;
    }
  }

  closeModale = () => {
    this.setState({
      modaleStatisticActive: false,
      modaleGaleryActive: false
    });
  }

  markerClicked = (lat, long) => {
    console.log(lat);
    console.log(long);

    let data = this.state.datas;
    let jsObj = JSON.parse(data);
    let find = lat;

    let values = Object.keys(jsObj).filter(function(x) {
      return jsObj[x].postcode.indexOf(find) > -1;
    }).map(function(x) {
      return jsObj[x].state;
    });

    //console.log(values.length > 0 ? values[0] : "not found");
  }

  setMarkers = () => {
    let markers = [];
    for(let i = 0; i < Datas.Movies_datas.length; i++) {
      markers.push(<Marker
        key={i} defaultIcon={MarkerIcon}
        position={{ lat: Datas.Movies_datas[i].Latitude, lng: Datas.Movies_datas[i].Longitude }}
        onClick={(e) => this.markerClicked(Datas.Movies_datas[i].Latitude, Datas.Movies_datas[i].Longitude)}
      />);
    }
    this.setState({markers});
  };

  render() {

    console.log(this.state.datas);

    return (
      <div className="container map">

        <MapComponent
          markers={this.state.markers}
        />
        <Dashboard
          closeDashboard={this.closeDashboard}
          className={this.state.dashboardActive}
          dashboardTitle={this.state.dashboardTitle}
          setDashboardContent={this.setDashboardContent}
        />
        <Travelboard

        />
        <Statistic
          modaleActive={this.state.modaleStatisticActive}
          closeModale={this.closeModale}
        />
        <Galery
          modaleActive={this.state.modaleGaleryActive}
          closeModale={this.closeModale}
        />
        <Popup/>

        <nav>
          <ul className="flex row center">
            <li>FAVORIS</li>
            <li onClick={() => this.openModale('statistic')} className={this.state.modaleStatisticActive === true ? 'nav-active gothic-font' : 'nav-unactive gothic-font'}>STATISTIQUE</li>
            <li onClick={() => this.openModale('moviesGalery')} className={this.state.modaleGaleryActive === true ? 'nav-active gothic-font' : 'nav-unactive gothic-font'}>FILMS</li>
            <li>SÉRIES</li>
          </ul>
        </nav>

        <div className={'options flex column '} style={this.state.activeOption === false ? {marginLeft: '-150px'} : {display: ''}} >
          <ul>
            <li onClick={(e) => this.setDashboardContent(e, 'séries')} className="cormorant-garamond-font">SÉRIES</li>
            <li onClick={(e) => this.setDashboardContent(e, 'voyage')} className="cormorant-garamond-font">VOYAGE</li>
            <li onClick={(e) => this.setDashboardContent(e, 'films')} className="cormorant-garamond-font">FILMS</li>
          </ul>
        </div>

        <div className="rs">
          <ul className="flex center">
            <li>
              <a href="" className="zoom flex center">
                <img src={FacebookIcon} alt=""/>
              </a>
            </li>
            <li>
              <a href="" className="zoom flex center">
                <img src={TwitterIcon} alt=""/>
              </a>
            </li>
            <li>
              <a href="" className="zoom flex center">
                <img src={InstagramIcon} alt=""/>
              </a>
            </li>
          </ul>
          <Link to="Home/" className="back-home">
            <img className="zoom" src={HomeIcon} alt=""/>
            <p className="gothic-font">Retour à l'écran d'accueil</p>
          </Link>
          <div className="legend">
            <div>
              <div>
                <div></div>
              </div>
            </div>
            <p className="gothic-font">La note donnée par les utilisateurs, détermine la taille du point.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Map;