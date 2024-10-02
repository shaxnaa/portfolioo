// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>I'm Shaina, a passionate Computer Science student,specializing in full-stack development,dedicated to leveraging my skills in technology and coding to solve real-world problems. I thrive in environments that challenge me to think critically and creatively.   I love solving problems and creating innovative solutions.</p>
      
      <h3>Education</h3>
      <p>School : St.Gerosa School,Mangalore</p>
      <p>PU : Canara Pre University,Mangalore</p>
      <p>Diploma : Karnataka Govt Polytechnic, Mangalore</p>
      
      <h3>Skills</h3>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>Python</li>
        <li>Java</li>
        <li>SQL</li>
        <li>MS Office</li>
        
      </ul>
      
      <h3>Hobbies</h3>
            
      <ul className="hobbies-list">
        <li>Reading Books</li>
        <li>Coding personal projects</li>
        <li>Exploring new technologies</li>
        <li>Traveling</li>
      </ul>
      
      <h3>Personal Statement</h3>
      <p>I believe in continuous learning and am always looking for opportunities to grow my skills and knowledge. I am excited about the future of technology and how it can improve our lives.</p>
    </section>
  );
};

export default About;
