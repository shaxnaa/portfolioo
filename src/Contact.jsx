// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      <p>Email: shainapoojary24@gmail.com</p>
      <p>Phone:91-7411186065</p>

    </section>
  );
};

export default Contact;

