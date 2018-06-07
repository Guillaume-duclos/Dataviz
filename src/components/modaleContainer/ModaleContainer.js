import React, {Component} from 'react';
import ExitIcon from '../../img/exit.svg';

class ModaleContainer extends Component {

  closeModale = () => {
    this.props.closeModale();
  }

  render() {

    if(this.props.modaleActive === false) {
      var style = {visibility: 'hidden', opacity: 0};
    } else {
      style = {visibility: 'visible', opacity: 1};
    }

    return (
      <div style={style} className="modale-container">
        <img className="exitIcon zoom" src={ExitIcon} onClick={this.closeModale} alt=""/>
        {this.props.content}
      </div>
    );
  }
}

export default ModaleContainer;