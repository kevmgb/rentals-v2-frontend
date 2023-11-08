import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import UserProfilePage from './components/UserProfilePage';
import SignupSuccess from './components/SignupSuccess';
import ListingPost from './components/ListingPost';
import UserPosts from './components/UserPosts';
import { useNavigate } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user was previously logged in
    const storedIsLogged = localStorage.getItem('isLogged');
    console.log("STORED IS LOGGED IN ========");
    console.log(storedIsLogged);
    setIsLoggedIn(Boolean(localStorage.getItem('token')));
  }, []);

  const handleSignout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (
    <Router>
        <NavbarUpdated isLoggedIn={isLoggedIn} handleSignout={handleSignout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/listing/detail/:id" element={<DetailsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignup setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/signup/success" element={<SignupSuccess />} />
          <Route path="/post" element={<ListingPost />} />
          <Route exact path="/user/posts" element={<UserPosts />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
