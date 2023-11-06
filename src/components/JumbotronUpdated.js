import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import jumbotronImage from '../images/nairobi.jpg'

export default function JumbotronUpdated() {

  return (
    <header style={{ paddingBottom: '50px' , width: '100%'}}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${jumbotronImage})`, height: '600px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-5'>Find your new home</h1>
              <h3 className='mb-3'>We will help you find the best properties</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}