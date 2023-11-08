import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import UserProfileDropDown from './UserProfileDropDown';

export default function NavbarUpdated({ isLoggedIn, handleSignout }) {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img src={logo} width="30" height="40"/>
          </MDBNavbarBrand>
            {Boolean(isLoggedIn) ? (
                <UserProfileDropDown handleSignout={handleSignout}/>
            ) : (
              <MDBNavbarBrand href='/login'>
                <MDBBtn type='button' outline rounded className='m-1'>
                  <NavLink exact to="/login">Login</NavLink>
                </MDBBtn>
              </MDBNavbarBrand>
            )}  
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}