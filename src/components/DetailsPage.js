import React from "react";
import { useLocation, useParams } from 'react-router-dom';

function DetailsPage() {
    const {id} = useParams();
    
    return (
        <div>
          <h1>Test</h1>
          <h1>House id: {id} </h1>
        </div>
      );
}

export default DetailsPage;