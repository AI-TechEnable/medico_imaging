// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      {/* <Header /> */}

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
