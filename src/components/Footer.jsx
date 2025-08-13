import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>AceHomework</h3>
          <p>Helping students excel in their academic journey</p>
        </div>
        
        <div className="footer-socials">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/acehomework" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/prude_luv/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/ScholarHelpDesk" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AceHomework. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;