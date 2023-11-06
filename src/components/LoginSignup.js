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
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
  }

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  }

  const handleSignupNameChange = (e) => {
    setSignupName(e.target.value);
  }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleLoginSubmit = (e) => {
    
    e.preventDefault();
    
    console.log("===================")
    console.log('Email:', email);
    console.log('Password:', password);
    console.log("===================")
  
    axios.post('http://localhost:8080/api/v1/login', {
      email: email,
      password: password
    })
    .then(response => {
      // Handle successful response from the backend
      console.log('Login successful:', response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isLogged', 'true');

      // Redirect to the home page
      navigate('/');

      // Retriving token from localStorage
      // const token = localStorage.getItem('token');
      // Including token in other requests
      // axios.post('YOUR_API_ENDPOINT', {
      //   // ... other request data
      // }, {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // })
      // .then(response => {
      //   // Handle response
      // })
      // .catch(error => {
      //   // Handle error
      // });
      // Logging out
      // localStorage.removeItem('token');
      
    })
    .catch(error => {
      // Handle error response from the backend
      console.error('Error:', error);
      alert("An erorr ocurred");
    });
  }

  const handleSignupSubmit = (e) => {
    
    e.preventDefault();
    
    axios.post('http://localhost:8080/api/v1/register', {
      name: signupName,
      email: signupEmail,
      password: signupPassword
    })
    .then(response => {
      // Handle successful response from the backend
      console.log('Signup successful:', response.data);
      
      // Redirect to the home page
      navigate('/signup/success');    
    })
    .catch(error => {
      // Handle error response from the backend
      console.error('Error:', error);
      alert("An erorr ocurred");
    });
  }
  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email} onChange={handleEmailChange}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={handlePasswordChange}/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
            <a href="!#">Forgot password?</a>
          </div>

          <form onSubmit={handleLoginSubmit}>
            <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          </form>
          
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign  with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' value={signupName} onChange={handleSignupNameChange}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={signupEmail} onChange={handleSignupEmailChange}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' value={signupPassword} onChange={handleSignupPasswordChange}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <form onSubmit={handleSignupSubmit}>
            <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          </form>
          
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default LoginSignup;