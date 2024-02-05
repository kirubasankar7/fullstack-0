import React from 'react';
import '../assets/css/landing.css'
import Navbar from './navbarlanding';
import '../assets/css/navbarlanding.css';

const Landing = () => {
  return (
    <>
    <Navbar/>
    <div className="landing">
      <h1> 
        Event Planning Is <br></br>Hard
        <h2>WE CAN HELP YOU</h2>
      </h1>
      <p>nestJoy is a full service event management firm based in Coimbatore, India that was created by pairing together our passion for business and events. We bring a fresh, unique approach to the event management industry.
<br></br><br></br>
Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan,
or used to build networks and client loyalty.</p>
      <button className="cta-button">Get Started</button>
    </div>
    </>
    
  );
};

export default Landing;