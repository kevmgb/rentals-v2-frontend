import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UserProfileDropDown() {
  const navigate = useNavigate();
  function Signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLogged');
    navigate('/');
  }
  return (
    <MDBDropdown>
    
      <MDBDropdownToggle tag='a' className='btn' style={{ outline: 'none', boxShadow: 'none' }}>
        <MDBIcon fas icon="user-circle" size='2x'/>
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <Link to="/user">
            <MDBDropdownItem link>View Profile</MDBDropdownItem>
        </Link>

         
        <MDBDropdownItem link onClick={Signout}>Logout</MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}