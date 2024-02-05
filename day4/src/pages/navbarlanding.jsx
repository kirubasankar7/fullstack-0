import React from 'react';
import '../assets/css/navbarlanding.css';

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">nestJoy</div>
      <ul className="nav-list">
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/reg'>Signup</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;