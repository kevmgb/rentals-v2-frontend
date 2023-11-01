import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275'}}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <p className='d-flex justify-content-center align-items-center'>
            <MDBBtn type='button' outline color="light" rounded className='m-1'>
              <MDBNavbarLink active href='/contact'>Contact</MDBNavbarLink>
            </MDBBtn>
            <MDBBtn type='button' outline color="light" rounded className='m-1'>
                <MDBNavbarLink active aria-current='page' href='/about'>
                    About
                </MDBNavbarLink>
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>
      
      
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Rentals v2
      </div>
    </MDBFooter>
  );
}