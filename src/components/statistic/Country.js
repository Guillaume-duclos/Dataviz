import React, { Component } from 'react';

class Statistic extends Component {
  render() {

    return (
      <div className="country-container">
        <div className="flex row between">
          <div className="country flex column">
            <img src={this.props.imageOne} alt=""/>
            <p className="uppercase">{this.props.countryOne}</p>
          </div>
          <div className="country flex column">
            <img src={this.props.imageTwo} alt=""/>
            <p className="uppercase">{this.props.countryTwo}</p>
          </div>
        </div>
        <div className="country-separator"></div>
        <p className="uppercase">{this.props.genre}</p>
      </div>
    );
  }
}

export default Statistic;