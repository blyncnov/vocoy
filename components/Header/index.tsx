import React from 'react';

import Navigation from '../constants/Navigation';
import Footer from '../constants/Footer';

import {HeaderWrapper} from "../../styles/home/Header"


const Header: React.FC = () => {
  return (
    <HeaderWrapper>
          <Navigation />
          <Footer/>
    </HeaderWrapper>
  )
}

export default Header
