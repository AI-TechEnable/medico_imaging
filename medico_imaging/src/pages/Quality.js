// src/pages/Quality.js
import React from 'react';
import './Quality.css';

const Quality = () => {
  return (
    <div className="quality-page">
      <h1 className="page-title">Our Commitment to Quality</h1>
      <div className="quality-content">
        <div className="quality-item">
          <h2>Advanced Technology</h2>
          <p>
            We offer state-of-the-art medical equipment that uses the latest technology to ensure high-quality imaging, accurate diagnostics, and reliable performance.
          </p>
        </div>
        <div className="quality-item">
          <h2>Certified Products</h2>
          <p>
            All our products are certified for quality and safety, adhering to global standards to provide the best care for patients and practitioners.
          </p>
        </div>
        <div className="quality-item">
          <h2>Customer Satisfaction</h2>
          <p>
            Our clients' satisfaction is our priority. We ensure high-quality service, support, and after-sales care to meet the needs of our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
