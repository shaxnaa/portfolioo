// src/App.js
import React from 'react';

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Project';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

