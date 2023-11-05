import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';
import ResultsPage from './components/ResultsPage';
import DetailsPage from './components/DetailsPage';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/LoginSignup';
import Signup from './components/Signup';
import NavbarUpdated from './components/NavbarUpdated';

function App() {
  return (
    <Router>
      
        <NavbarUpdated />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/listing/detail/:id" element={<DetailsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        
        <Footer />
      
    </Router>
  );
}

export default App;
