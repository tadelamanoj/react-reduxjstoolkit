// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import ArrayComponent from './ArrayComp';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <ArrayComponent/>
      <Link to={'/'}>Home</Link>
      <p>This is the about page of the application.</p>
    </div>
  );
};

export default About;
