import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";

export default Map = compose (
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

  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);