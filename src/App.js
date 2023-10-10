import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/listings')
      .then(response => response.json())
      .then(data => setApartments(data))
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        
        <div className='card-container'>
          {apartments.map(apartment => (
              <Card name = {apartment.name} bed = {apartment.beds} baths ={apartment.baths}/>
          ))}
        </div>

        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
