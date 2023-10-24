import React ,{ useState, useEffect }from 'react';
import '../App.css';
import Card from './Card';
import Jumbotron from './Jumbotron';

function Home() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/listings')
      .then(response => response.json())
      .then(data => setApartments(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <Jumbotron />
      <div className='card-container'>
            {apartments.map(apartment => (
                <Card name = {apartment.name} bed = {apartment.beds} baths ={apartment.baths}/>
            ))}
      </div>
    </>
  );
}

export default Home;
