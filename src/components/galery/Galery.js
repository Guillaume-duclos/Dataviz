import React, { Component } from 'react';
import ModaleContainer from "../modaleContainer/ModaleContainer";
import galeryImg1 from '../../img/galery/galery-img1.jpg';
import galeryImg2 from '../../img/galery/galery-img2.jpg';
import galeryImg3 from '../../img/galery/galery-img3.jpg';
import galeryImg4 from '../../img/galery/galery-img4.jpg';
import galeryImg5 from '../../img/galery/galery-img5.jpg';
import galeryImg6 from '../../img/galery/galery-img6.jpg';
import galeryImg7 from '../../img/galery/galery-img7.jpg';
import galeryImg8 from '../../img/galery/galery-img8.jpg';
import galeryImg9 from '../../img/galery/galery-img9.jpg';
import galeryImg10 from '../../img/galery/galery-img10.jpg';
import galeryImg11 from '../../img/galery/galery-img11.jpg';
import galeryImg12 from '../../img/galery/galery-img12.jpg';
import galeryImg13 from '../../img/galery/galery-img13.jpg';
import galeryImg14 from '../../img/galery/galery-img14.jpg';
import galeryImg15 from '../../img/galery/galery-img15.jpg';
import galeryImg16 from '../../img/galery/galery-img16.jpg';
import galeryImg17 from '../../img/galery/galery-img17.jpg';
import galeryImg18 from '../../img/galery/galery-img18.jpg';
import galeryImg19 from '../../img/galery/galery-img19.jpg';
import galeryImg20 from '../../img/galery/galery-img20.jpg';

class Galery extends Component {

  modaleContent = () => {
    let galeryImg = [
      galeryImg1,
      galeryImg2,
      galeryImg3,
      galeryImg4,
      galeryImg5,
      galeryImg6,
      galeryImg7,
      galeryImg8,
      galeryImg9,
      galeryImg10,
      galeryImg11,
      galeryImg12,
      galeryImg13,
      galeryImg14,
      galeryImg15,
      galeryImg16,
      galeryImg17,
      galeryImg18,
      galeryImg19,
      galeryImg20
    ];
    return (
      <div className="modale-content modale-movies-galery">
        <div className="">
          {galeryImg.map(function(img, index){
            return <div style={{backgroundImage: `url(${img})`}} key={index}></div>
          })}
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

export default Galery;