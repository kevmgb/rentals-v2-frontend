import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function AgentInfo({name, contact}) {
  return (
    <MDBCard>
      <MDBCardHeader>Agent Information:</MDBCardHeader>
      <MDBListGroup flush>
        <MDBListGroupItem>Name:    {name}</MDBListGroupItem>
        <MDBListGroupItem>Contact:   <a href={`mailto:${contact}`}>{contact}</a></MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
  );
}