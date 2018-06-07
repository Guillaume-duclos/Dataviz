import React, { Component } from 'react';
import closeArrow from '../../img/close-arrow.svg';

class Dashboard extends Component {

  state = {
    activeButtonFilms: false,
    activeButtonSeries: false,
    activeButtonFilmsAndSeries: false
  }

  closeDashboard = () => {
    this.props.closeDashboard();
  }

  activeButton = (type) => {
    type === 'films' ? this.setState({activeButtonFilms: true}) : this.setState({activeButtonFilms: false});
    type === 'series' ? this.setState({activeButtonSeries: true}) : this.setState({activeButtonSeries: false});
    type === 'filmsAndSeries' ? this.setState({activeButtonFilmsAndSeries: true}) : this.setState({activeButtonFilmsAndSeries: false});
  }

  dashboardContent = () => {
    if(this.props.dashboardTitle === 'séries') {
      return(
        <form className="flex row between">
          <input type="text" placeholder="Nom de la série" className="input"/>
          <select name="cars" className="classic select">
            <option value="v-1">Valeur 1</option>
            <option value="v-2">Valeur 2</option>
            <option value="v-3">Valeur 3</option>
            <option value="v-4">Valeur 4</option>
          </select>
          <input type="text" placeholder="SAISON (ex:S01)" className="input"/>
          <input type="text" placeholder="ÉPISODE (ex:E01)" className="input"/>
        </form>
      );
    } else if(this.props.dashboardTitle === 'voyage') {
      let activeFilms = this.state.activeButtonFilms ? 'activeDashboardButton' : 'unactiveDashboardButton';
      let activeSeries = this.state.activeButtonSeries ? 'activeDashboardButton' : 'unactiveDashboardButton';
      let activeFilmsAndSeries = this.state.activeButtonFilmsAndSeries ? 'activeDashboardButton' : 'unactiveDashboardButton';
      return(
        <form className="flex row between">
          <input type="text" placeholder="Rabat" className="input"/>
          <input type="text" placeholder="Ville d'arrivée" className="input"/>
          <div className="form-range-container flex row between">
            <label>Années</label>
            <input type="range" min="1" max="100" value="50" className="range"/>
          </div>
          <div className="form-button-container flex row between">
            <input className={activeFilms} onClick={(films) => this.activeButton('films')} type="submit" value="Films"/>
            <input className={activeSeries} onClick={(series) => this.activeButton('series')} type="submit" value="Séries"/>
            <input className={activeFilmsAndSeries} onClick={(filmsAndSeries) => this.activeButton('filmsAndSeries')} type="submit" value="Films et séries"/>
          </div>
        </form>
      );
    } else if(this.props.dashboardTitle === 'films') {
      return(
        <form className="flex row between">
          <input type="text" placeholder="Nom du film" className="input"/>
          <select name="cars" className="classic select">
            <option value="v-1">Valeur 1</option>
            <option value="v-2">Valeur 2</option>
            <option value="v-3">Valeur 3</option>
            <option value="v-4">Valeur 4</option>
          </select>
          <input type="text" placeholder="ANNÉE DE SORTIE" className="input"/>
          <input type="text" placeholder="Acteur principal" className="input"/>
        </form>
      );
    }
  }

  setDashboardContent = (e, title) => {
    this.props.setDashboardContent(e, title);
  }

  render() {
    let activeTravelButton = this.props.dashboardTitle === 'voyage'? 'activeTravelButton' : 'unactiveTravelButton';
    return (
      <div className={'dashboard ' + this.props.className}>
        <img onClick={this.closeDashboard} className="close-arrow zoom" src={closeArrow} alt=""/>
        <h2>{this.props.dashboardTitle}</h2>
        <h3>FAITES VOTRE SÉLECTION, ET VOYAGEZ !</h3>
        <p>
          Découvrez les lieux de tournages à travers le monde entier.<br/>
          Donnez-nous votre itineraire  de voyage, votre pays, votre série ou film préféré ; nous nous occupons du reste.
        </p>
        <div className="dashboardContent">
          {this.dashboardContent()}
        </div>
        <div className="options flex column">
          <ul>
            <li onClick={(e) => this.setDashboardContent(e, 'séries')} style={this.props.dashboardTitle === 'séries' ? {display: 'none'} : {display: 'block'}} className="cormorant-garamond-font">SÉRIES</li>
            <li onClick={(e) => this.setDashboardContent(e, 'voyage')} style={this.props.dashboardTitle === 'voyage' ? {display: 'none'} : {display: 'block'}} className="cormorant-garamond-font">VOYAGE</li>
            <li onClick={(e) => this.setDashboardContent(e, 'films')}  style={this.props.dashboardTitle === 'films'  ? {display: 'none'} : {display: 'block'}} className="cormorant-garamond-font">FILMS</li>
          </ul>
        </div>
        <button className={'travelButton uppercase pointer ' + activeTravelButton}>Partir à l'aventure</button>
      </div>
    );
  }
}

export default Dashboard;