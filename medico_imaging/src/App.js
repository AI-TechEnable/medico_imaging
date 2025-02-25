import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ProductVideos from './pages/Product_videos';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:categoryId/:categoryName" element={<Products/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ProductVideos" element={< ProductVideos/>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
