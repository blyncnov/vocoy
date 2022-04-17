import React from 'react';

import Navigation from '../constants/Navigation';
import Footer from '../constants/Footer';

interface myProps {
  children: React.ReactNode;
}

const Layout: React.FC<myProps>= (props) => {
  return (
    <>
      <Navigation />
           {props.children}
        <Footer/>
    </>
  )
}

export default Layout
