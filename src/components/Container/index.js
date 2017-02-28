import React from 'react';
import Footer from '../Footer/index.js';
import Header from '../Header/index.js';
import Contact from '../Contact/index.js';

export default function(props) {
    return (
      <div className="container">
        <Header />
        {props.children}
        <Contact />
        <Footer />
      </div>
    )
}
