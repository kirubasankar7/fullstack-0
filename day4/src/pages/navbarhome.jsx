import React from 'react';
import '../assets/css/navbarhome.css';
import { HiUserCircle } from "react-icons/hi";
import { IoHeartCircle } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbarh">
      <div className="logoh">nestJoy</div>
      <ul className="nav-listh">
        <li>Home</li>
        <li>About</li>
        <li>What we do</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li><HiUserCircle style={{width:30,height:30}}/></li>
        <li><IoHeartCircle style={{width: 30, height: 30}}/></li>
        <li><MdShoppingCart style={{width:30,height:30}}/></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;