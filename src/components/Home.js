import React ,{ useState, useEffect }from 'react';
import '../App.css';
import Card from './Card';
import Jumbotron from './Jumbotron';

function Home() {
  const [apartments, setApartments] = useState([]);

  console.log(apartments);
  
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/listings')
      .then(response => response.json())
      .then(data => setApartments(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
    <div class="container">
      <Jumbotron />
        <div className='card-container'>
              {apartments.map(apartment => (
                  <Card id = {apartment.id} name = {apartment.name} beds = {apartment.beds} baths ={apartment.baths}/>
              ))}
              {/* <Card id="1" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <Card id="2" name="Two bedroom in Ruai" beds="1" baths="2" />
              <Card id="3" name="Bedsitter in Juja" beds="1" baths="2" />
              <Card id="4" name="One bedroom in Kinoo" beds="1" baths="2" />
              <Card id="5" name="Four bedroom in Kasarani" beds="1" baths="2" />
              <Card id="6" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <Card id="7" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <Card id="8" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <Card id="9" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <Card id="10" name="Three bedroom in Ruaka" beds="1" baths="2" /> */}
        </div>
    </div>
    </>
  );
}

export default Home;
