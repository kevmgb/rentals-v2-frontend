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
import NavbarUpdated from './NavbarUpdated';
import Footer from './Footer';

function Home({ isLoggedIn }) {
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
      <div className='container' style={{ marginBottom: '40px' }}>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          
                {apartments.map(apartment => (
                    <CardUpdated id = {apartment.id} name = {apartment.name} beds = {apartment.beds} baths ={apartment.baths} description={apartment.description}/>
                ))}
            
          </MDBRow>
          {/* <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
              <CardUpdated id="1" name="Three bedroom in Ruaka dshhdhshdhhsdhhhsdh dsdsdsdsdsds hdhshdhhshdhsd jjjjjjjjjjjjjjjsdjhsjhfkjshfkhskfhshfshfkjshfkjshfjkhsdjkfhsjkf" beds="1" baths="2" />
              <CardUpdated id="2" name="Two bedroom in Ruai" beds="1" baths="2" />
              <CardUpdated id="3" name="Bedsitter in Juja" beds="1" baths="2" />
              <CardUpdated id="4" name="One bedroom in Kinoo" beds="1" baths="2" />
              <CardUpdated id="5" name="Four bedroom in Kasarani" beds="1" baths="2" />
              <CardUpdated id="6" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <CardUpdated id="7" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <CardUpdated id="8" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <CardUpdated id="9" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <CardUpdated id="10" name="Three bedroom in Ruaka" beds="1" baths="2" />
            </MDBRow> */}
        </div>
    </>
    
  );
}

export default Home;
