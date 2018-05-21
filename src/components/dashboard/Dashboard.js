import React, { Component } from 'react';
import closeArrow from '../../img/close-arrow.svg';

class Dashboard extends Component {

  closeDashboard = () => {
    this.props.closeDashboard();
  }

  dashboardContent = () => {
    if(this.props.dashboardTitle == 'séries') {
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
    } else if(this.props.dashboardTitle == 'voyage') {
      return(
        <form className="flex row between">
          <input type="text" placeholder="Rabat" className="input"/>
          <input type="text" placeholder="Ville d'arrivée" className="input"/>
          <div className="form-range-container flex row between">
            <label>Années</label>
            <input type="range" min="1" max="100" value="50" className="range"/>
          </div>
          <div className="form-button-container flex row between">
            <input type="submit" value="Films"/>
            <input type="submit" value="Séries"/>
            <input type="submit" value="Films et séries"/>
          </div>
        </form>
      );
    } else if(this.props.dashboardTitle == 'films') {
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

  render() {
    return (
      <div className={'dashboard ' + this.props.className}>
        <img onClick={this.closeDashboard} className="close-arrow" src={closeArrow}/>
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
            <li onClick={(e) => this.setDashboardContent(e, 'séries')} style={this.props.dashboardTitle == 'séries' ? {display: 'none'} : {display: 'block'}}>SÉRIES</li>
            <li onClick={(e) => this.setDashboardContent(e, 'voyage')} style={this.props.dashboardTitle == 'voyage' ? {display: 'none'} : {display: 'block'}}>VOYAGE</li>
            <li onClick={(e) => this.setDashboardContent(e, 'films')}  style={this.props.dashboardTitle == 'films'  ? {display: 'none'} : {display: 'block'}}>FILMS</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;