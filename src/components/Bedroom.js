// Bedroom.js
import React from 'react';

function Bedroom({value}) {
  return (
    <div className="property-info">
      <div className="info-label">Bedrooms:</div>
      <div className="info-value custom-value">{value}</div>
    </div>
  );
}

export default Bedroom;
