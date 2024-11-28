// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css';
import '../styles/Home.css'
import AppAppBar from '../components/AppAppBar';
// import Navbar from '../components/AppAppBar'

const Home = () => {
  return (
    <div className="home">
      <header>
        <AppAppBar/>
        <h1>Welcome to Medico Imaging</h1>
        <nav>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Our Products</h2>
          <p>Browse through our top-quality medical equipment.</p>
          <div className="product-categories">
            <Link to="/products">View All Products</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
