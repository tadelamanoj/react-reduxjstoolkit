// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <Link to={'/'}>Home</Link>
      <p>This is the about page of the application.</p>
    </div>
  );
};

export default About;
