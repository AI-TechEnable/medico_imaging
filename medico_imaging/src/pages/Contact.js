import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    product: '',
  });

  const [selectedProduct, setSelectedProduct] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_wo4iwl7', // Replace with your EmailJS service ID
        'template_v6faxrr', // Replace with your EmailJS template ID
        {
          productName: selectedProduct,
          userName: formData.name,
          userPhone: formData.phone,
          userMessage: formData.message,
        },
        '0nAiH-WmAmtum7CzU' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Success:', response);
          alert('Enquiry submitted successfully!');
        },
        (error) => {
          console.log('Error:', error);
          alert('Failed to send enquiry. Please try again.');
        }
      );
  };

  const productCategories = [
    'Sonography Machine',
    'CR Machines',
    'Hospital Equipment',
    'X-Ray Machine',
    'C Arm Machine',
    'Refurbished Medical Machines',
    'Refurbished Ct Scanner',
    'Point Of Care Ultrasound',
    'CT Scanner',
    'D R SYSTEM',
    'Diagnostic Services',
    'Portable X Ray Machine',
    'Old CT Scan',
    'Ultrasound Colour Doppler Machine',
    'Cr Systems',
    'Old Cathlab',
    'Ct Scan Machine'
  ];
  

  return (
    <div className='main'>
      <AppAppBar/>
    <div className="contact-container">
      
      <div className="contact-form">
        <h2>Get In Touch</h2>
        <p>Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.</p>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Email"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Product"
            name="product"
            value={formData.product}
            onChange={(e) => {
              handleFormChange(e);
              setSelectedProduct(e.target.value);
            }}
            fullWidth
            required
            sx={{ mb: 2 }}
          >
            {productCategories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleFormChange}
            fullWidth
            multiline
            rows={4}
            required
            sx={{ mb: 2 }}
          />
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </div>
      <div className="contact-image">
        <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/353033912/WO/GM/WI/1953739/mindray-ultrasound-machines-500x500.png" alt="Contact" />
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Contact;

