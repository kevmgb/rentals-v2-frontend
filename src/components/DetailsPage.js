import React from "react";
import { useLocation } from 'react-router-dom';

function DetailsPage() {
    const location = useLocation();
    const { id, name, beds, baths } = location.state || {};
    return (
        <div>
          <h1>Test</h1>
          <h1>House id: {id} </h1>
          <h1>House name: {name} </h1>
          <h1>Beds: {beds} </h1>
          <h1>Baths: {baths} </h1>
        </div>
      );
}

export default DetailsPage;