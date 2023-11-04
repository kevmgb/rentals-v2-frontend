import React, { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import '../App.css';
import image from '../images/house.jpg';
import HouseSpecifications from "./HouseSpecifications";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBContainer,
  MDBCol
} from 'mdb-react-ui-kit';
import AgentInfo from "./AgentInfo";

function DetailsPage() {
    const {id} = useParams();
    const [houseDetails, setHouseDetails] = useState({});
    const [loading, setLoading] = useState(true);

    let agentName = "Agent Name 001";
    let agentContact = "0700000000";
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
      <>
      <div className="container-full" style={{ marginTop: '40px' }}>
      <MDBContainer>
          <MDBCard className='mb-3'>
            <MDBRow>
              <div className="col-md-8">
                <MDBCardImage position='top' src={image} alt='...' />
              </div>
              <div className="col-md-4">
                <MDBRow>
                  <div className="col-md-12 mb-4">
                    <HouseSpecifications beds={houseDetails.beds} bathrooms={houseDetails.baths}/>
                  </div>
                  <div className="col-md-12 mb-4">
                    <AgentInfo name={agentName} contact={agentContact}/>
                  </div>
                  <div className="col-md-12 mb-4">
                  <MDBCardBody>
                    <MDBCardTitle>{houseDetails.name}</MDBCardTitle>
                    <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </MDBCardText>
                  </MDBCardBody>
                  </div>
                </MDBRow>
              </div>
            </MDBRow> 
          </MDBCard>
        </MDBContainer>
        </div>
      </>
    );
    
    
    
    
}

export default DetailsPage;