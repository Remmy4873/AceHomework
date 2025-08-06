import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch('https://yourdomain.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AcademicPro Assignment Help</title>
        <meta name="description" content="Contact our academic support team for assignment help, questions, or service inquiries. Available 24/7 for US students." />
        <meta name="keywords" content="contact academic help, assignment help contact, homework help support, USA student contact" />
        <meta property="og:title" content="Contact AcademicPro | 24/7 Assignment Help Support" />
        <meta property="og:description" content="Get in touch with our academic support team for all your assignment help needs." />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="contact-page">
        <article className="contact-container">
          <header className="contact-header">
            <h1>Contact AcademicPro</h1>
            <p className="subtitle">24/7 Support for Your Assignment Needs</p>
          </header>

          <div className="contact-content">
            <section className="contact-form-section" aria-labelledby="form-heading">
              <h2 id="form-heading">Get in Touch</h2>
              
              {formStatus.submitted ? (
                <div className="success-message">
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. Our team will respond within 24 hours.</p>
                  <button 
                    className="primary-button"
                    onClick={() => setFormStatus({...formStatus, submitted: false})}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {formStatus.error && (
                    <div className="error-message">
                      Error: {formStatus.error}. Please try again.
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johndoe@gmail.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Assignment Help">Assignment Help</option>
                      <option value="Urgent Deadline">Urgent Deadline</option>
                      <option value="Pricing Inquiry">Pricing Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Please include details about your assignment (course, deadline, requirements)..."
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="primary-button"
                      disabled={formStatus.submitting}
                    >
                      {formStatus.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </section>

            <aside className="contact-info">
              <div className="info-card">
                <h3>How To Submit</h3>
                <ul className="contact-methods">
                  <li>
                    <span className="icon">📧</span>
                    <span>Email: <a href="mailto:reliableassignmentwritter@gmail.com">reliableassignmentwritter@gmail.com</a></span>
                  </li>
                  <li>
                    <span className="icon">📱</span>
                    <span>Text: <a href="sms:+18005551234">+1 (800) 555-1234</a></span>
                  </li>
                  <li>
                    <span className="icon">💬</span>
                    <span>Live Chat: Available 24/7 on our website</span>
                  </li>
                </ul>
              </div>

              <div className="info-card">
                <h3>What to Include</h3>
                <ul className="tips-list">
                  <li>Assignment instructions/files</li>
                  <li>Course name</li>
                  <li>Your deadline</li>
                  <li>Preferred citation style</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Response Time</h3>
                <ul className="response-times">
                  <li>
                    <span className="time">Weekdays:</span>
                    <span>Within 2 hours</span>
                  </li>
                  <li>
                    <span className="time">Weekends:</span>
                    <span>Within 4 hours</span>
                  </li>
                  <li>
                    <span className="time">Urgent Requests:</span>
                    <span>Immediate response</span>
                  </li>
                </ul>
              </div>

              
            </aside>
          </div>
        </article>
      </main>
    </>
  );
};

export default Contact;