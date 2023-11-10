import React ,{ useState, useEffect, useRef }from 'react';
import '../App.css';
import CardUpdated from './CardUpdated';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';
import JumbotronUpdated from './JumbotronUpdated';
import NavbarUpdated from './NavbarUpdated';
import Footer from './Footer';
import axios from 'axios';

function UserPosts({ isLoggedIn }) {
  const [listings, setListings] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const contentRef = useRef();
  const handlePreviousClick = () => {
    setPageNumber(pageNumber - 1);
    
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDeletePost = ({ id }) => {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:8080/api/v1/listing/delete/${id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
          }
    })
      .then(response => {
        console.log(response.data);
        setListings(prevListings => prevListings.filter(listing => listing.id !== id));
      })
      .catch(error => console.error('Error:', error));
  };

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
    
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const token = localStorage.getItem('token');
  const loadListings = (page, size) => {
    axios.get(`http://localhost:8080/api/v1/user/listings?page=${page}&size=${size}` , {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
          }
    })
      .then(response => {
        const { content, totalElements, totalPages, pageNumber, pageSize } = response.data;
        setListings(content);
        setTotalElements(totalElements);
        setTotalPages(totalPages);
        setPageNumber(pageNumber);
        setPageSize(pageSize);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    loadListings(pageNumber, pageSize);
  }, [pageNumber, pageSize]);

  return (
    <>
      <div className='container-full' style={{ marginBottom: '40px' }} ref={contentRef}>
      <div className="text-center mb-3 mt-4">
            <h5>MY POSTS:</h5>
          </div>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          
                {listings.map(listing => (
                    <CardUpdated id = {listing.id} name = {listing.name} beds = {listing.beds} baths ={listing.baths} description={listing.description} canDelete={true} handleDeletePost={handleDeletePost}/>
                ))}
            
          </MDBRow>
            <div className="d-flex justify-content-center align-items-center mb-4 mt-4">
              <MDBBtn floating size='lg' tag='a' disabled={pageNumber === 1} onClick={handlePreviousClick} className="mx-2">
                <MDBIcon fas icon="chevron-left"/>
              </MDBBtn>
              <MDBBtn floating size='lg' tag='a' disabled={pageNumber === totalPages} onClick={handleNextClick} className="mx-2">
                <MDBIcon fas icon="chevron-right" />
              </MDBBtn>
              <div className="custom-ml-auto">
                Page {pageNumber} of {totalPages}
              </div>
            </div>
        </div>
    </>
    
  );
}

export default UserPosts;
