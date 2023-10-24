import React from 'react';
import jumbotronImage from '../images/background1.jpeg'
import SearchBar from './SearchBar';

function Jumbotron() {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${jumbotronImage})` }}>
      <h1 className="jumbotron-heading">Find your new home</h1>
      <p className="jumbotron-text">We will help you find the best property</p>
      <div className="search-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default Jumbotron;
