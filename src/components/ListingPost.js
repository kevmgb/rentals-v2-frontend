import React, { useState } from "react";
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ListingPost() {
  const [name, setName] = useState('');
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }
  const handleBedsChange = (e) => {
    setBeds(e.target.value);
  }
  const handleBathsChange = (e) => {
    setBaths(e.target.value);
  }
  
  const handlePostSubmit = (e) => {
    
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    axios.post('http://localhost:6868/api/v1/listing', {
      name: name,
      beds: beds,
      baths: baths,
      description: description
    }, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      })
    .then(response => {
      // Handle successful response from the backend
      console.log('Post created successfully', response.data);
      
      // Redirect to the home page
      navigate('/');    
    })
    .catch(error => {
      // Handle error response from the backend
      console.error('Error:', error);
      alert("An erorr ocurred");
    });
  }

  return (
      <div className="container-full" style={{ marginTop: '40px' }}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <div className="text-center mb-3">
              <p>Post a listing:</p>
            </div>
  
            <MDBInput wrapperClass='mb-4' label='Name' id='typeText' type='text' value={name} onChange={handleNameChange}/>
            <MDBInput wrapperClass='mb-4' label='Beds' id='form1' type='number' value={beds} onChange={handleBedsChange}/>
            <MDBInput wrapperClass='mb-4' label='Baths' id='form2' type='number' value={baths} onChange={handleBathsChange}/>
            <MDBTextArea wrapperClass='mb-4' label='Description' id='textAreaExample' rows={4} value={description} onChange={handleDescriptionChange}/>
            <form onSubmit={handlePostSubmit}>
              <MDBBtn className="mb-4 w-100">Post</MDBBtn>
            </form>
            
      </MDBContainer>
      </div>
    );
}

export default ListingPost;