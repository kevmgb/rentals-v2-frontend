import React from 'react';
import { useLocation } from 'react-router-dom';
import CardUpdated from './CardUpdated';

const ResultsPage = () => {
    const location = useLocation();
    const results = location.state.results || [];
    console.log(location);
    return (
      <div>
        {results.length > 0 ? (

          <div className='card-container'>
            {results.map((apartment, index) => (
              <CardUpdated id = {apartment.id} name = {apartment.name} beds = {apartment.beds} baths ={apartment.baths} description={apartment.description} canDelete={false}/>
            ))}
          </div>
        ) : (
          <div>No results found</div>
        )}
      </div>
    );
  };

export default ResultsPage;
