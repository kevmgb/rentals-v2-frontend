// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBDropdown,
//   MDBDropdownMenu,
//   MDBDropdownToggle,
//   MDBDropdownItem,
// } from 'mdb-react-ui-kit';

// export default function NavbarUpdated() {
//   const [showNavLeft, setShowNavLeft] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarToggler
//           type='button'
//           data-target='#navbarLeftAlignExample'
//           aria-controls='navbarLeftAlignExample'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNavLeft(!showNavLeft)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showNavLeft}>
//           <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='/'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink active href='/login'>Login</MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img src={logo} width="30" height="40"/>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='/login'>
            {/* <img src={logo} width="30" height="40"/> */}
            <MDBBtn type='button' outline rounded className='m-1'>
              <NavLink exact to="/login">Login</NavLink>
            </MDBBtn>
            
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}