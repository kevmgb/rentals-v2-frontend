import React from "react";
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
    MDBTextArea
  }
  from 'mdb-react-ui-kit';

function ListingPost() {
    return (
        <div className="container-full" style={{ marginTop: '40px' }}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
              <div className="text-center mb-3">
                <p>Post a listing:</p>
              </div>
    
              <MDBInput wrapperClass='mb-4' label='Name' id='typeText' type='text' />
              <MDBInput wrapperClass='mb-4' label='Beds' id='form1' type='number'/>
              <MDBInput wrapperClass='mb-4' label='Baths' id='form2' type='number'/>
    
              <MDBBtn className="mb-4 w-100">Post</MDBBtn>
        </MDBContainer>
        </div>
      );
}

export default ListingPost;