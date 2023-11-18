import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';
import axios from 'axios';

function UserProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const token = localStorage.getItem('token');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleProfileUpdateSubmit = (e) => {
    
    e.preventDefault();
    
    
    axios.put("http://localhost:6868/api/v1/user", {
      name: name,
    }, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      })
    .then(response => {
      // Handle successful response from the backend
      console.log('User profile updated successfully', response.data);
    })
    .catch(error => {
      // Handle error response from the backend
      console.error('Error:', error);
      alert("An erorr ocurred");
    });
  }

  const loadUserProfile = () => {
    axios.get("http://localhost:6868/api/v1/user", {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        const { name, email } = response.data;
        setName(name);
        setEmail(email);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  return (
    <>
      <div className='container-full' style={{ marginBottom: '40px' }}>
        <div className="text-center mb-3 mt-4">
          <h5>MY PROFILE:</h5>
        </div>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <div className="text-center mb-3">
              <p>Manage your profile:</p>
            </div>
  
            <MDBInput wrapperClass='mb-4' label='Name' id='typeText' type='text' value={name} onChange={handleNameChange}/>
            <MDBInput wrapperClass='mb-4' label='Email' id='typeText' type='text' value={email} onChange={handleEmailChange} readOnly/>
            
            <form onSubmit={handleProfileUpdateSubmit}>
              <MDBBtn className="mb-4 w-100">Update Profile</MDBBtn>
            </form>
            
      </MDBContainer>
      </div>
    </>

  );
}

export default UserProfilePage;