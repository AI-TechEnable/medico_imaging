// src/pages/About.js
import React from 'react';
import { Helmet } from 'react-helmet';
import AppAppBar from '../components/AppAppBar';
import '../styles/About.css'

const About = () => {
  return (
    <div className='main'>
      <Helmet>
        <title>About Us - Medico Imaging</title>
        <meta name="description" content="Learn more about Medico Imaging and our products." />
      </Helmet>
      <AppAppBar/>
      <section>
        <div className='abt-text'>
             About Us
        </div>
        <h3>We are one of the leading traders and suppliers of New And Refurbished Medical Equipment & Machines, which is known for providing accurate results and minimal maintenance. In addition to this, we excel in rendering Maintenance Services for the same.</h3>
      </section>
      
    </div>
  );
};

export default About;
