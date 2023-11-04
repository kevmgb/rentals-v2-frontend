import React, { useState } from 'react';
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

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function ContactForm() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div className="container-full" style={{ marginTop: '40px' }}>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <div className="text-center mb-3">
            <p>Contact us:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='typeText' type='text' />
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBTextArea wrapperClass='mb-4' label='Message' id='textAreaExample' rows={4} />

          <MDBBtn className="mb-4 w-100">Submit</MDBBtn>
    </MDBContainer>
    </div>
  );
}

export default ContactForm;