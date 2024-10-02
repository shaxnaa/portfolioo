// src/components/Home.js
import React from 'react';
import './Home.css';
import profileImage from './assets/WhatsApp Image 2024-10-02 at 10.08.49_27c465d4.jpg'
const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="intro">
      <div className="intro-photo">
            <img src={profileImage} alt="Your Profile" />
          </div>
        
        <h1> Hiii, I'm Shaina</h1>
        <p> a Computer Science Diploma student,passionate about technology and coding.</p>
        <p>I'm excited to share my journey and projects with you!</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
      
    </section>
  );
};

export default Home;
