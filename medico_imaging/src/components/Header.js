// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 20px;
  text-align: center;
`;

const Header = () => (
  <HeaderWrapper>
    {/* <h1>Medico Imaging</h1> */}
  </HeaderWrapper>
);

export default Header;


// can also use external CSS frameworks like Bootstrap or Material UI for faster development