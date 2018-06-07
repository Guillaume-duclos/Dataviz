import React from 'react';

const HorizontalRateLine = (props) => (
  <div className="horizontal-rate-line">
    <p>{props.legende}</p>
    <div>
      <div className="stat-line-rate" style={{width: props.rate}}></div>
      <p>{props.rate}</p>
    </div>
  </div>
);

export default HorizontalRateLine;