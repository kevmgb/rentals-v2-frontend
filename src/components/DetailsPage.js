import React, { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import '../App.css';
import image from '../images/house.jpg';

function DetailsPage() {
    const {id} = useParams();
    const [houseDetails, setHouseDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://localhost:8080/api/v1/listing/${id}`)
        .then(response => response.json())
        .then(data => {
          setHouseDetails(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(true);
        });
    }, {});

    if (loading) {
      return <div>Loading...</div>
    }
    
    return (
        <div className="house-details">
          <img src={image} />
          <h1>{houseDetails.name} </h1>
          <h1>Baths: {houseDetails.baths} </h1>
          <h1>Beds: {houseDetails.beds} </h1>
          
        </div>
      );
}

export default DetailsPage;