import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";
import MapOptions from './MapStyles';
import Datas from '../../datas/datas';
import MarkerIcon from '../../img/marker.png';

class MapComponent extends Component {

  markers = () => {
    let marker = [];
    for(let i = 0; i < Datas.Movies_datas.length; i++) {
      marker.push(<Marker key={i} defaultIcon={MarkerIcon} position={{ lat: Datas.Movies_datas[i].Latitude, lng: Datas.Movies_datas[i].Longitude }}/>);
    }
    return marker;
  };

  render() {

    const Map = compose (
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
        {this.markers()}
      </GoogleMap>
    );

    return (
      <Map/>
    );
  }
}

export default MapComponent;