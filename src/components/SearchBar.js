import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBInputGroup,
  MDBBtn
} from 'mdb-react-ui-kit';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const onSearch = (searchTerm) => {
    fetch(`http://localhost:8080/api/v1/listings/search?query=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      navigate('/results', {state: { results: data }});
    })
    .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <MDBInputGroup className='mb-3'>
        <input className='form-control' placeholder="Search..." type='text' value={searchTerm} onChange={handleInputChange}/>
        <MDBBtn onClick={handleSearch} style={{ backgroundColor: 'rgb(86, 61, 124)' }}>Search</MDBBtn>
      </MDBInputGroup>
    </>
  );
};

export default SearchBar;
