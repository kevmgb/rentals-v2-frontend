import React from 'react';
import { useLocation } from 'react-router-dom';
import CardUpdated from './CardUpdated';
import {
  MDBRow
} from 'mdb-react-ui-kit';

const ResultsPage = () => {
    const location = useLocation();
    const results = location.state.results || [];
    console.log(location);
    return (
      <div>
        {results.length > 0 ? (

          <div className='container' style={{ marginBottom: '40px' }}>
          <div className="text-center mb-3 mt-4">
            <h5>SEARCH RESULTS:</h5>
          </div>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            {results.map((apartment, index) => (
                <CardUpdated id = {apartment.id} name = {apartment.name} beds = {apartment.beds} baths ={apartment.baths} description={apartment.description} canDelete={false}/>
              ))}
          </MDBRow>
            
          </div>
        ) : (
          <div>No results found</div>
        )}
      </div>
    );
  };

export default ResultsPage;
