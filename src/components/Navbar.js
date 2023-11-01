import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
