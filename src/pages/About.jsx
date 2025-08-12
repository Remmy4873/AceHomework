import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "AcademicPro",
    "url": "https://yourdomain.com",
    "description": "Professional assignment completion service for US students to achieve top grades on Canvas submissions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    }
  };

  const serviceFeatures = [
    {
      title: "Canvas Submission Ready",
      description: "We format all assignments specifically for Canvas LMS submission requirements",
      icon: "📤"
    },
    {
      title: "Guaranteed Quality",
      description: "Expert-written assignments designed to earn top grades in US institutions",
      icon: "🏆"
    },
    {
      title: "Direct Submission",
      description: "Option to have us submit directly to your Canvas course with your credentials",
      icon: "🔑"
    },
    {
      title: "24/7 Deadline Support",
      description: "Last-minute help available for urgent Canvas submissions",
      icon: "⏰"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About AceHomework | Premium Assignment Help for US Students</title>
        <meta name="description" content="AceHomework completes assignments for US students, delivering Canvas-ready submissions for guaranteed better grades." />
        <meta name="keywords" content="Canvas assignment help, do my homework, assignment writing service, USA student help, guaranteed grades" />
        <meta property="og:title" content="About AcademicPro | Assignment Completion Service" />
        <meta property="og:description" content="We complete and submit Canvas assignments for US students to improve grades." />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="about-page">
        <article className="about-container">
          <header className="about-hero">
            <h1>About AceHomework</h1>
            <p className="hero-subtitle">Premium Assignment Completion Service for US Students</p>
            <div className="hero-badges">
              <span className="badge">A+ Quality Work</span>
              <span className="badge">Canvas Experts</span>
              <span className="badge">Direct Submission</span>
            </div>
          </header>

          <section className="mission-section" aria-labelledby="mission-heading">
            <div className="mission-content">
              <div className="mission-text">
                <h2 id="mission-heading">Our Service</h2>
                <p>AceHomework specializes in completing academic assignments for US students who need help maintaining or improving their grades. We provide ready-to-submit work formatted specifically for Canvas LMS requirements.</p>
                <p>Our team of subject matter experts delivers high-quality assignments that meet your professor's requirements, helping you achieve better grades without the stress of tight deadlines or complex coursework.</p>
                <div className="mission-stats">
                  <div className="stat-item">
                    <div className="stat-number">97%</div>
                    <div className="stat-label">Grade Improvement</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Canvas Compatible</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Deadline Support</div>
                  </div>
                </div>
              </div>
              <div className="mission-image">
                <img src="https://res.cloudinary.com/dqtzbgvug/image/upload/v1754553297/mlxhgiabt6zzvgkb977q.jpg" alt="Canvas assignment submission interface" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="features-section" aria-labelledby="features-heading">
            <h2 id="features-heading">How Our Service Works</h2>
            <p className="section-intro">We make getting better grades through Canvas submissions simple:</p>
            <div className="features-grid">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="subjects-section" aria-labelledby="subjects-heading">
            <h2 id="subjects-heading">Subjects We Cover</h2>
            <p className="section-intro">Comprehensive assignment help across all academic disciplines:</p>
            <div className="subjects-grid">
              <div className="subject-card">
                <h3>Business & Economics</h3>
                <ul>
                  <li>Case studies</li>
                  <li>Financial analyses</li>
                  <li>Business plans</li>
                  <li>Market research</li>
                </ul>
              </div>
              <div className="subject-card">
                <h3>STEM Fields</h3>
                <ul>
                  <li>Lab reports</li>
                  <li>Programming assignments</li>
                  <li>Math problem sets</li>
                  <li>Engineering projects</li>
                </ul>
              </div>
              <div className="subject-card">
                <h3>Humanities</h3>
                <ul>
                  <li>Essays & research papers</li>
                  <li>Literature analyses</li>
                  <li>History papers</li>
                  <li>Philosophy essays</li>
                </ul>
              </div>
              <div className="subject-card">
                <h3>Social Sciences</h3>
                <ul>
                  <li>Psychology reports</li>
                  <li>Sociology papers</li>
                  <li>Political science essays</li>
                  <li>Annotated bibliographies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Better Grades This Semester?</h2>
              <p>Let our experts handle your Canvas assignments while you focus on what matters most.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="primary-cta">
                  Order Assignment Help
                </Link>
                <Link to="/contact" className="secondary-cta">
                  Ask About Submissions
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Exclusive service for US college students 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default About;