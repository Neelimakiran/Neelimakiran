import React from 'react';
import './Home.css';
import backgroundImage from '../assets/background-home.jpg'; // Adjust path if necessary

const Home = () => (
  <section className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="home-content">
      <h1>Welcome to My Portfolio</h1>
      <div className="card-container">
        <div className="card">
          <h3>Project 1</h3>
          <p>Details about Project 1.</p>
        </div>
        <div className="card">
          <h3>Project 2</h3>
          <p>Details about Project 2.</p>
        </div>
        <div className="card">
          <h3>Project 3</h3>
          <p>Details about Project 3.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
