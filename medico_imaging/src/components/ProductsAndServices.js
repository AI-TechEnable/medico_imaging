import React from 'react';
import '../styles/ProductsAndServices.css'; // Assume you will create a CSS file for styling

const ProductsAndServices = () => {
  return (
    <section className="products-services">
      <div className="container">
        <h2>Our Products & Services</h2>
        <h3>Leading Supplier of Refurbished Medical Equipment</h3>
        <p>
          We offer a wide range of refurbished medical machines, including imaging equipment, diagnostic tools, and radiology devices. 
          Sourced from renowned vendors and meeting industry standards, our products ensure accuracy and reliability in medical procedures.
        </p>
        
        <div className="product-list">
          <div className="product-item">
            <img src="path-to-image" alt="Imaging Equipment Icon" />
            <h4>Refurbished Imaging Equipment</h4>
            <p>Advanced imaging technology for medical use.</p>
          </div>
          <div className="product-item">
            <img src="path-to-image" alt="Color Doppler Icon" />
            <h4>Refurbished Color Doppler Machines</h4>
            <p>Real-time imaging for accurate diagnostics.</p>
          </div>
          <div className="product-item">
            <img src="path-to-image" alt="Ultrasound Icon" />
            <h4>Ultrasound Machines</h4>
            <p>High-quality ultrasound machines for patient care.</p>
          </div>
          <div className="product-item">
            <img src="path-to-image" alt="X-ray Icon" />
            <h4>Refurbished X-ray Machines</h4>
            <p>Reliable X-ray equipment for superior diagnostics.</p>
          </div>
          <div className="product-item">
            <img src="path-to-image" alt="CT Scan Icon" />
            <h4>CT Scan & MRI Machines</h4>
            <p>Providing top-notch CT Scan and MRI diagnostic solutions.</p>
          </div>
          <div className="product-item">
            <img src="path-to-image" alt="BMB Icon" />
            <h4>BMB Machines</h4>
            <p>Precision Bone Marrow Biopsy equipment.</p>
          </div>
          <div className="product-item">
            <img src="path-to-image" alt="Radiology Icon" />
            <h4>Radiology Equipment</h4>
            <p>A wide range of refurbished radiology machines for medical use.</p>
          </div>
        </div>

        <div className="cta">
          <a href="/catalog" className="btn">Browse Our Full Catalog</a>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;
