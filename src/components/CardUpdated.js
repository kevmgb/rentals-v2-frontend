// import React from 'react';
// import cardImage from '../images/house.jpg';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple,
//   MDBRow,
//   MDBCol
// } from 'mdb-react-ui-kit';

// export default function CardUpdated({id, name, beds, baths}) {
//   return (
//     // <MDBRow>
//     //   <MDBCol sm='3'>
//         <MDBCard>
//             <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//                 <MDBCardImage src={cardImage} fluid alt='...' />
//                 <a>
//                 <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//                 </a>
//             </MDBRipple>
//             <MDBCardBody>
//                 <MDBCardTitle>{name}</MDBCardTitle>
//                 <MDBCardText>
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//                 </MDBCardText>
//                 <MDBBtn href='#'>Button</MDBBtn>
//             </MDBCardBody>
//             </MDBCard>
//     //   </MDBCol>
//     // </MDBRow>
    
//   );
// }

import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter,
  MDBCardHeader,
  MDBIcon
} from 'mdb-react-ui-kit';
import cardImage from '../images/house.jpg';
import { Link } from 'react-router-dom';

export default function CardUpdated({id, name, beds, baths}) {
  return (
    <Link to={`/listing/detail/${id}`} style={{ color: 'inherit' }}>
      <MDBCol className='h-100'>
        <MDBCard className='h-100'>
            <MDBCardImage src={cardImage} alt='...' position='top'/>
            <MDBCardHeader>{name}</MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className='text-muted'>
              <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol className='col-md-8'>
                  <small className='text-muted'>Posted 2 days ago</small>
                </MDBCol>
                <MDBCol className='col-md-2'>
                  <MDBIcon fas icon="bed" /> {beds} 
                </MDBCol>
                <MDBCol className='col-md-2'>
                  <MDBIcon fas icon="bath"/> {baths}
                </MDBCol>
              </MDBRow>   
            </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </Link>
  );
}