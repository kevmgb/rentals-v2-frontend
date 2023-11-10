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

function Home() {
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

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
    
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const loadListings = (page, size) => {
    axios.get(`http://localhost:8080/api/v1/listings?page=${page}&size=${size}`)
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
    
    <JumbotronUpdated />
      <div className='container' style={{ marginBottom: '40px' }} ref={contentRef}>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          
                {listings.map(listing => (
                    <CardUpdated id = {listing.id} name = {listing.name} beds = {listing.beds} baths ={listing.baths} description={listing.description} canDelete={false}/>
                ))}
            
          </MDBRow>
          {/* <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
              <CardUpdated id="1" name="Three bedroom in Ruaka dshhdhshdhhsdhhhsdh dsdsdsdsdsds hdhshdhhshdhsd jjjjjjjjjjjjjjjsdjhsjhfkjshfkhskfhshfshfkjshfkjshfjkhsdjkfhsjkf" beds="1" baths="2" />
              <CardUpdated id="2" name="Two bedroom in Ruai" beds="1" baths="2" />
              <CardUpdated id="3" name="Bedsitter in Juja" beds="1" baths="2" />
              <CardUpdated id="4" name="One bedroom in Kinoo" beds="1" baths="2" />
              <CardUpdated id="5" name="Four bedroom in Kasarani" beds="1" baths="2" />
              <CardUpdated id="6" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <CardUpdated id="7" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <CardUpdated id="8" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <CardUpdated id="9" name="Three bedroom in Ruaka" beds="1" baths="2" />
              <CardUpdated id="10" name="Three bedroom in Ruaka" beds="1" baths="2" />
            </MDBRow> */}

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

export default Home;
