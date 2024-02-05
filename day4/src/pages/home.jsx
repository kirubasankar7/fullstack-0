import React from 'react';
import Navbar from './navbarhome';
import Sidebar from './sidebar';
import '../assets/css/home.css';
import '../assets/css/navbarhome.css';
import '../assets/css/sidebar.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{display:"flex"}}>
        <Sidebar />
        <div style={{width:"50%",padding:"20px"}}>
          <header>
            <h3>Welcome to Your Website</h3>
          </header>
          <section>
            <p>This is a simple static homepage in a black and white theme.</p>
          </section>
          <footer>
            <p>© 2024 Your Website. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
