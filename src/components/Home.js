// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Home</h2>
      <Link to={'/about'}>About</Link>
      <p>This is the home page of the application.</p>
    </div>
  );
};

export default Home;
