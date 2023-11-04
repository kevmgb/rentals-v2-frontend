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
  MDBCol
} from 'mdb-react-ui-kit';
import cardImage from '../images/house.jpg';
import { Link } from 'react-router-dom';

export default function CardUpdated({id, name, beds, baths}) {
  return (
    <Link to={`/listing/detail/${id}`} >
      <MDBCol className='h-100'>
        <MDBCard className='h-100'>
            <MDBCardImage src={cardImage} alt='...' position='top'/>
            <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>Placeholder</MDBCardText>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>
  );
}