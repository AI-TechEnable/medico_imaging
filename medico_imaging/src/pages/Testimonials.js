// src/pages/Testimonials.js
import React from 'react';
// import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'Medico Imaging provided exceptional service! The quality of their equipment is outstanding, and the customer support is top-notch.',
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'I’ve been using their ultrasound machines for months now, and they have been reliable and easy to use. Highly recommended!',
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 3,
    name: 'Dr. Michael Lee',
    feedback: 'We’ve partnered with Medico Imaging for several years. Their products and service have consistently exceeded our expectations.',
    image: 'https://via.placeholder.com/100'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <h1 className="page-title">What Our Clients Say</h1>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
