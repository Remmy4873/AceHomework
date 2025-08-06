import React from 'react';
import { Link } from 'react-router-dom';
import './EssayWriting.css';

const NotFound = () => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Page Not Found</h1>
        <p>We couldn't find the page you're looking for</p>
      </div>
      <div className="service-container">
        <section className="cta-section">
          <Link to="/" className="cta-button">
            Return to Homepage
          </Link>
        </section>
      </div>
    </div>
  );
};

export default NotFound;