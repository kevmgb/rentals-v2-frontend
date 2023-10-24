import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      if (data.length > 0) {
        navigate('/results', {state: { results: data }});
      }
    })
    .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <input
        className='search-input' 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
        placeholder="Enter your search term" 
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
