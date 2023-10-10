import React from 'react';
import jumbotronImage from '../images/background1.jpeg'

function Jumbotron() {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${jumbotronImage})` }}>
      <h1 className="jumbotron-heading">Find your new home</h1>
      <p className="jumbotron-text">We will help you find the best property</p>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      {/* <div className="scroll-down">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#007bff" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm.5 4a.5.5 0 0 0-1 0v2.793L6.354 7.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 8.793V6z"/>
        </svg>
      </div> */}
    </div>
  );
}

export default Jumbotron;
