// src/pages/About.js
import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Medico Imaging</title>
        <meta name="description" content="Learn more about Medico Imaging and our products." />
      </Helmet>
      <h1>About Us</h1>
      <p>Our story...</p>
    </div>
  );
};

export default About;
