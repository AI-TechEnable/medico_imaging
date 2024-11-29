// src/pages/Home.js
import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Home.css'
import AppAppBar from '../components/AppAppBar';
import Carousel from '../components/Carousel';


const Home = () => {
  return (
    <div className="home">
      <Carousel/>
      <AppAppBar/>
      
      
    </div>
  );
};

export default Home;
