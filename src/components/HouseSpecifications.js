import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function HouseSpecifications({beds, bathrooms}) {
  return (
    <MDBCard>
      <MDBCardHeader>Specifications</MDBCardHeader>
      <MDBListGroup flush>
        <MDBListGroupItem>Bedrooms    {beds}</MDBListGroupItem>
        <MDBListGroupItem>Bathrooms   {bathrooms}</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
  );
}