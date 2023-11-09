import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter,
  MDBCardHeader,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import cardImage from '../images/house.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CardUpdated({id, name, beds, baths, description, canDelete, handleDeletePost}) {
  
  // const handleDeletePost = () => {
  //   const token = localStorage.getItem('token');
  //   axios.delete(`http://localhost:8080/api/v1/listing/delete/${id}`, {
  //       headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Authorization': `Bearer ${token}`
  //         }
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => console.error('Error:', error));
  // };
  
  return (
    
      <MDBCol className='h-100'>
        <MDBCard className='h-100'>
        <Link to={`/listing/detail/${id}`} style={{ color: 'inherit' }}>
            <MDBCardImage src={cardImage} alt='...' position='top'/>
            <MDBCardHeader>{name}</MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>{description}</MDBCardText>
            </MDBCardBody>
            </Link>
            <MDBCardFooter className='text-muted'>
              <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol className='col-md-6'>
                  <small className='text-muted'>Posted 2 days ago</small>
                </MDBCol>
                
                {canDelete && (
                  <MDBCol className='col-md-2'>
                    <MDBIcon fas icon="trash-alt" onClick={() => handleDeletePost({ id: id })} style={{ cursor: 'pointer' }}/>
                  </MDBCol>
                )}

                <MDBCol className='col-md-2'>
                  <MDBIcon fas icon="bed" /> {beds} 
                </MDBCol>
                <MDBCol className='col-md-2'>
                  <MDBIcon fas icon="bath"/> {baths}
                </MDBCol>
              </MDBRow>   
            </MDBCardFooter>
        </MDBCard>
      </MDBCol>
  );
}