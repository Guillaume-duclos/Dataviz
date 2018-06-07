import React, { Component } from 'react';
import Video from '../video/video_accueil.mp4';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="container home">
        <video id="home-video" loop autoPlay>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="title flex center column">
          <p className="gothic-font">L'expérience unique</p>
          <h1 className="cormorant-garamond-font">The movie travel</h1>
          <p className="cormorant-garamond-font">Un voyage autour du monde, <br/>avec vos séries et films préférés.</p>
          <Link className="gothic-font" to="Map/">Découvrir</Link>
        </div>
      </div>
    );
  }
}

export default Home;