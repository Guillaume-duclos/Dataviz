import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MapOptions from '../components/map/MapStyles';
import FacebookIcon from '../img/facebook.svg';
import TwitterIcon from '../img/twitter.svg';
import InstagramIcon from '../img/instagram.svg';
import Dashboard from "../components/dashboard/Dashboard";

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
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

class Map extends Component {

  state = {
    dashboardTitle: '',
    dashboardActive: '',
    activeOption: true
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

  render() {
    return (
      <div className="container map">

        <MapComponent/>
        <Dashboard closeDashboard={this.closeDashboard} className={this.state.dashboardActive} dashboardTitle={this.state.dashboardTitle}/>

        <nav>
          <ul className="flex row center">
            <li>FAVORIS</li>
            <li>STATISTIQUE</li>
            <li>FILMS</li>
            <li>SÉRIES</li>
          </ul>
        </nav>

        <div className={'options flex column '} style={this.state.activeOption == false ? {marginLeft: '-150px'} : {display: ''}} >
          <ul>
            <li onClick={(e) => this.setDashboardContent(e, 'séries')}>SÉRIES</li>
            <li onClick={(e) => this.setDashboardContent(e, 'voyage')}>VOYAGE</li>
            <li onClick={(e) => this.setDashboardContent(e, 'films')}>FILMS</li>
          </ul>
        </div>

        <div className="rs">
          <ul className="flex center">
            <li>
              <a href="" className="flex center">
                <img src={FacebookIcon}/>
              </a>
            </li>
            <li>
              <a href="" className="flex center">
                <img src={TwitterIcon}/>
              </a>
            </li>
            <li>
              <a href="" className="flex center">
                <img src={InstagramIcon}/>
              </a>
            </li>
          </ul>
          <div className="legend">
            <div>
              <div>
                <div></div>
              </div>
            </div>
            <p>La note donnée par les utilisateurs, détermine la taille du point.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Map;