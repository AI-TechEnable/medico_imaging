// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';  // Create a CSS file for footer styles if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>&copy; 2024 Medico Imaging. All rights reserved.</p>
          <p>Email: <a href="mailto:info@medicoimaging.com">info@medicoimaging.com</a></p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
