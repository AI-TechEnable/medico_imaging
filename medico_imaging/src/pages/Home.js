// src/pages/Home.js
import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Home.css'
import AppAppBar from '../components/AppAppBar';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import FAQ from '../components/Faq';
import Footer from '../components/Footer';
import Highlights from '../components/Highlight';
// import ProductsAndService from '../components/ProductsAndServices'


const Home = () => {
  return (
    <div className="home">  
      <Carousel/> 
      <AppAppBar/>
      <Hero/>
      {/* <ProductsAndService/> */}
      <Highlights/>
      <FAQ/>
      <Footer/>
      
      
    </div>
  );
};

export default Home;
