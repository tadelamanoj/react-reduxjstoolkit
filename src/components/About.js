// src/components/About.js
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ArrayComponent from './ArrayComp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../features/actions/counterActions';

const About = () => {

  const userData = useSelector((state)=>state.dummy.items)
  const dispatch = useDispatch()

  const handleclick=()=>{
    dispatch(fetchItems())
  }
  useEffect(()=>{
  },[userData])

  return (
    <div>
      <h2>About Us</h2>
      <ArrayComponent/>
      <Link to={'/'}>Home</Link>
      <button onClick={handleclick}>User Data</button>
      <p>This is the about page of the application.</p>
      {userData && userData.map((item,index)=><button key={item+index}>{item.title}</button>)}

    </div>
  );
};

export default About;
