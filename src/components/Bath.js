import React from 'react';

function Bath({value}) {
  return (
    <div className="property-info">
      <div className="info-label">Baths:</div>
      <div className="info-value custom-value">{value}</div>
    </div>
  );
}

export default Bath;
