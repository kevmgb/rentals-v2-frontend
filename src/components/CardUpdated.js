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
import RandomImageSelector from './RandomImageSelector';
export default function CardUpdated({id, name, beds, baths, description, canDelete, handleDeletePost}) {
  return (
    
      <MDBCol className='h-100'>
        <MDBCard className='h-100'>
        <Link to={`/listing/detail/${id}`} style={{ color: 'inherit' }}>
            {/* <MDBCardImage src={cardImage} alt='...' position='top'/> */}
            <RandomImageSelector />
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