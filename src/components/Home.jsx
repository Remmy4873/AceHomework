import React from 'react';
import './Home.css';
import { FaGraduationCap, FaBook, FaClock, FaChartLine, FaSync, FaShieldAlt } from 'react-icons/fa';
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
        <div className="feature-icon-container">
          <FaGraduationCap className="feature-icon" />
        </div>
        <h3>Top-Tier Experts</h3>
        <p>Our team consists of PhD holders and subject matter experts with years of experience in academic writing.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon-container">
          <FaBook className="feature-icon" />
        </div>
        <h3>All Subjects Covered</h3>
        <p>From STEM to humanities, we provide assistance across all academic disciplines and assignment types.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon-container">
          <FaClock className="feature-icon" />
        </div>
        <h3>Urgent Deadlines</h3>
        <p>We specialize in last-minute assignments with turnaround times as fast as 3 hours when needed.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon-container">
          <FaChartLine className="feature-icon" />
        </div>
        <h3>Guaranteed Results</h3>
        <p>Our work comes with quality guarantees and free revisions to ensure your complete satisfaction.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon-container">
          <FaSync className="feature-icon" /> {/* Using FaSync for revisions icon */}
        </div>
        <h3>Unlimited Revisions</h3>
        <p>Not satisfied? We offer unlimited revisions until your assignment meets all your requirements perfectly.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon-container">
          <FaShieldAlt className="feature-icon" /> {/* Using FaShieldAlt for plagiarism icon */}
        </div>
        <h3>100% Original Work</h3>
        <p>Every assignment is crafted from scratch with thorough research and guaranteed plagiarism-free content.</p>
      </div>
    </div>
  </div>
</section>

      {/* How It Works Section */}
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Trusted by Students Worldwide</h2>
          <p className="section-subtitle">Hear from students who've transformed their academic journey</p>
          <Testimonials />
        </div>
      </section>

      {/* Final CTA Section */}
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