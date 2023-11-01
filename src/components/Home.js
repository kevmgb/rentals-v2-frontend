import React ,{ useState, useEffect }from 'react';
import '../App.css';
import Card from './Card';
import Jumbotron from './Jumbotron';
import CardUpdated from './CardUpdated';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import JumbotronUpdated from './JumbotronUpdated';
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
    <JumbotronUpdated />
      <div className='container'>
        <MDBRow className='row-cols-3 row-cols-md-4 g-4'>
          
                {apartments.map(apartment => (
                    <CardUpdated id = {apartment.id} name = {apartment.name} beds = {apartment.beds} baths ={apartment.baths}/>
                ))}
            
          </MDBRow>
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
    </>
    
  );
}

export default Home;
