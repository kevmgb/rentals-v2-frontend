import React from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';


const ResultsPage = () => {
    const location = useLocation();
    const results = location.state.results || [];
    console.log(location);
    return (
      <div>
        {results.length > 0 ? (

          <div className='card-container'>
            {results.map((apartment, index) => (
              <Card id = {apartment.id} name = {apartment.name} bed = {apartment.beds} baths ={apartment.baths}/>
            ))}
          </div>
        ) : (
          <div>No results found</div>
        )}
      </div>
    );
  };

export default ResultsPage;
