import React from 'react';
import './Home.css';
import Testimonials from '../pages/Testimonials';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-text">
            <h1>Academic Excellence Starts Here</h1>
            <p className="hero-subtitle">24/7 homework help from PhD experts across all subjects</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Students Helped</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Subject Experts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
            <button className="cta-button">Get Started Now</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why AceHomework Stands Out</h2>
          <p className="section-subtitle">We go beyond just answers to ensure real academic growth</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image-container">
                <img 
                  src="https://res.cloudinary.com/dqtzbgvug/image/upload/v1755092661/mkk8zkaoykfnlbudjlwg.jpg" 
                  alt="Top-Tier Experts" 
                  className="feature-image"
                  loading="lazy"
                />
              </div>
              <h3>Top-Tier Experts</h3>
            </div>
            <div className="feature-card">
              <div className="feature-image-container">
                <img 
                  src="https://res.cloudinary.com/dqtzbgvug/image/upload/v1755092715/fgzkexlraguxpqlwdedj.jpg" 
                  alt="All Subjects Covered" 
                  className="feature-image"
                  loading="lazy"
                />
              </div>
              <h3>All Subjects Covered</h3>
            </div>
            <div className="feature-card">
              <div className="feature-image-container">
                <img 
                  src="https://res.cloudinary.com/dqtzbgvug/image/upload/v1755092760/ei1aw9wbrhyqp8a1n5rv.jpg" 
                  alt="Urgent Deadlines" 
                  className="feature-image"
                  loading="lazy"
                />
              </div>
              <h3>Student's Satisfaction</h3>
            </div>
            <div className="feature-card">
              <div className="feature-image-container">
                <img 
                  src="https://res.cloudinary.com/dqtzbgvug/image/upload/v1755092793/ilfhrunrmilfevqjoajd.jpg" 
                  alt="Guaranteed Results" 
                  className="feature-image"
                  loading="lazy"
                />
              </div>
              <h3>Guaranteed Results</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your components remain the same */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Simple Process</h2>
          <p className="section-subtitle">Get your assignments completed quickly and efficiently</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Contact Us</h3>
                <p>Reach out to discuss your assignment details, deadline, and pricing.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Assignment Completion</h3>
                <p>After agreement, our expert will handle your assignment thoroughly and deliver it before your deadline.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Review & Payment</h3>
                <p>Review the completed work and request any needed revisions. Payment is only required after you're satisfied.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Trusted by Students Worldwide</h2>
          <p className="section-subtitle">Hear from students who've transformed their academic journey</p>
          <Testimonials />
        </div>
      </section>

      <section className="ccta-section">
        <div className="container">
          <div className="cta-wrapper">
            <h2>Ready to Order Your Assignment?</h2>
            <p>Get started today and receive a high-quality, perfectly completed assignment.</p>
            <div className="cta-buttons">
              <a href="/contact" className="secondary-cta">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;