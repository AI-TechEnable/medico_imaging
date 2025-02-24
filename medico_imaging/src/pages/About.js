// src/pages/About.js
import React from 'react';
import { Helmet } from 'react-helmet';
import AppAppBar from '../components/AppAppBar';
import '../styles/About.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import Footer from '../components/Footer';
import AboutUs from '../components/About_us';
// import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <div className='main'>
      <Helmet>
        <title>About Us - Medico Imaging</title>
        <meta name="description" content="Learn more about Medico Imaging and our products." />
      </Helmet>
      <AppAppBar/>
      <section className='context'>
        <div className='abt-text'>
             About Us
        </div>
        
        {/* <img src='https://wfnkbftrclahkqvwmoqv.supabase.co/storage/v1/object/sign/Medico_data/About_banner.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNZWRpY29fZGF0YS9BYm91dF9iYW5uZXIuanBnIiwiaWF0IjoxNzM5NDI3OTU5LCJleHAiOjE3NzA5NjM5NTl9.biIEsCUJynRjM6TqfaGNdOIRVtYIUcxMaDu7HKyickk' alt='test'></img> */}
      </section>
      {/* <h3>We are one of the leading traders and suppliers of New And Refurbished Medical Equipment & Machines, which is known for providing accurate results and minimal maintenance. In addition to this, we excel in rendering Maintenance Services for the same.</h3> */}

      <div className="image-container">
          <img
            src="https://wfnkbftrclahkqvwmoqv.supabase.co/storage/v1/object/sign/Medico_data/About_banner.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNZWRpY29fZGF0YS9BYm91dF9iYW5uZXIuanBnIiwiaWF0IjoxNzM5NDI3OTU5LCJleHAiOjE3NzA5NjM5NTl9.biIEsCUJynRjM6TqfaGNdOIRVtYIUcxMaDu7HKyickk"
            alt="Banner"
            className="context-img"
          />
          <div className="text-overlay">
            <h2>MEDICO IMAGING SERVICES, Nashik</h2>
            <a href='https://trustseal.indiamart.com/members/medicoimaging'><p>IndiaMART Trust Seal Verified  <VerifiedIcon /></p></a>
          </div>

      </div>
      
      <h3 style={{marginTop:'20px'}}>We are one of the leading traders and suppliers of New And Refurbished Medical Equipment & Machines, which is known for providing accurate results and minimal maintenance. In addition to this, we excel in rendering Maintenance Services for the same.</h3>
      <AboutUs/>
      <Footer/>
      
    </div>
  );
};

export default About;
