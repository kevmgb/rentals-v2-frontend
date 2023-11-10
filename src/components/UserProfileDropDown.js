import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UserProfileDropDown({ handleSignout }) {
  return (
    <MDBDropdown>
    
      <MDBDropdownToggle tag='a' className='btn' style={{ outline: 'none', boxShadow: 'none' }}>
        <MDBIcon far icon="user-circle" size='3x' style={{ color: 'white' }}/>
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <Link to="/user">
            <MDBDropdownItem link>View Profile</MDBDropdownItem>
        </Link>

        <Link to="/post">
            <MDBDropdownItem link>Post a property</MDBDropdownItem>
        </Link>

        <Link to="/user/posts">
            <MDBDropdownItem link>My posts</MDBDropdownItem>
        </Link>

        <MDBDropdownItem link onClick={handleSignout}>Logout</MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}