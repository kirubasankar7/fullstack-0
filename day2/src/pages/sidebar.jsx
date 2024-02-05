import React from 'react';
import '../assets/css/sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <h2>Menu</h2> */}
      <ul>
        <li>Themes</li>
        <li><Link to='/photo'>Photography</Link></li>
        <li><Link to='/makeup'>Makeup</Link></li>
        <li><Link to='/mehandi'>Mehandi</Link></li>
        <li><Link to='/entertain'>Entertainment</Link></li>
        <li><Link to='/food'>Food</Link></li>
        <li><Link to='/gift'>Return Gifts</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;