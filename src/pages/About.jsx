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
    "description": "Professional academic assistance for US students across all disciplines and education levels.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    }
  };

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Academic Officer",
      bio: "PhD in Education from Stanford University with 15 years of teaching experience at the university level.",
      expertise: "Academic Writing, Research Methodology"
    },
    {
      name: "Prof. Michael Chen",
      role: "Head of STEM Tutoring",
      bio: "Former MIT professor specializing in engineering and computer science education.",
      expertise: "Engineering, Computer Science, Mathematics"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Humanities Department Lead",
      bio: "Harvard graduate with extensive experience in liberal arts curriculum development.",
      expertise: "Literature, History, Philosophy"
    },
    {
      name: "James Wilson",
      role: "Student Success Coordinator",
      bio: "Dedicated to ensuring every student receives personalized support for their academic journey.",
      expertise: "Academic Planning, Study Strategies"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About AcademicPro | Trusted Academic Help for US Students</title>
        <meta name="description" content="AcademicPro provides professional academic assistance to US students across all disciplines. Learn about our mission, team, and commitment to academic excellence." />
        <meta name="keywords" content="about academic help, US student assistance, academic writing help, homework help USA, tutoring services, academic support" />
        <meta property="og:title" content="About AcademicPro | Academic Help for American Students" />
        <meta property="og:description" content="Trusted academic assistance service helping US students succeed across all disciplines and education levels." />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="about-page">
        <article className="about-container">
          <header className="about-hero">
            <h1>About AcademicPro</h1>
            <p className="hero-subtitle">Empowering US Students to Achieve Academic Excellence</p>
            <div className="hero-badges">
              <span className="badge">5000+ Students Helped</span>
              <span className="badge">100+ Academic Disciplines</span>
              <span className="badge">US-Based Experts</span>
            </div>
          </header>

          <section className="mission-section" aria-labelledby="mission-heading">
            <div className="mission-content">
              <div className="mission-text">
                <h2 id="mission-heading">Our Mission</h2>
                <p>At AcademicPro, we're dedicated to providing comprehensive academic support to students across the United States. Whether you're in high school, college, or pursuing advanced degrees, our team of experienced educators and subject matter experts is here to help you succeed.</p>
                <p>We understand the unique challenges faced by American students in today's competitive academic environment. Our services are tailored to meet the specific requirements of US educational institutions while fostering independent learning and critical thinking skills.</p>
                <div className="mission-stats">
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Student Satisfaction</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support Availability</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">US Colleges Supported</div>
                  </div>
                </div>
              </div>
              <div className="mission-image">
                <img src="/images/about-mission.jpg" alt="Diverse group of students studying together" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="services-section" aria-labelledby="services-heading">
            <h2 id="services-heading">How We Help US Students</h2>
            <p className="section-intro">Comprehensive academic support across all disciplines and education levels:</p>
            <div className="services-grid">
              <div className="service-card">
                <h3>High School Students</h3>
                <ul>
                  <li>College prep assistance</li>
                  <li>AP course support</li>
                  <li>Standardized test preparation</li>
                  <li>Essay writing help</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Undergraduates</h3>
                <ul>
                  <li>Course-specific tutoring</li>
                  <li>Research paper assistance</li>
                  <li>STEM problem solving</li>
                  <li>Thesis statement development</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Graduate Students</h3>
                <ul>
                  <li>Thesis/dissertation support</li>
                  <li>Literature review assistance</li>
                  <li>Statistical analysis help</li>
                  <li>Publication preparation</li>
                </ul>
              </div>
              <div className="service-card">
                <h3>Working Professionals</h3>
                <ul>
                  <li>Continuing education support</li>
                  <li>Professional certification prep</li>
                  <li>Business writing assistance</li>
                  <li>Technical documentation help</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="team-section" aria-labelledby="team-heading">
            <h2 id="team-heading">Meet Our Academic Team</h2>
            <p className="section-intro">US-based educators and subject matter experts:</p>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card" itemScope itemType="https://schema.org/Person">
                  <div className="team-card-image">
                    <img src={`/images/team-${index+1}.jpg`} alt={`${member.name}, ${member.role}`} loading="lazy" itemProp="image" />
                  </div>
                  <div className="team-card-content">
                    <h3 itemProp="name">{member.name}</h3>
                    <p className="team-role" itemProp="jobTitle">{member.role}</p>
                    <p itemProp="description">{member.bio}</p>
                    <div className="team-expertise">
                      <strong>Expertise:</strong> <span itemProp="knowsAbout">{member.expertise}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="values-section">
            <h2>Our Academic Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Academic Integrity</h3>
                <p>We uphold the highest standards of academic honesty while providing support that enhances learning.</p>
              </div>
              <div className="value-card">
                <h3>Personalized Support</h3>
                <p>Every student receives customized assistance tailored to their specific needs and learning style.</p>
              </div>
              <div className="value-card">
                <h3>US Curriculum Focus</h3>
                <p>Our experts are well-versed in American educational standards and requirements.</p>
              </div>
              <div className="value-card">
                <h3>Confidentiality</h3>
                <p>We maintain strict privacy standards to protect your academic information.</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Elevate Your Academic Performance?</h2>
              <p>Join thousands of US students who have achieved their academic goals with our help.</p>
              <div className="cta-buttons">
                <Link to="/services" className="primary-cta">
                  Explore Our Services
                </Link>
                <Link to="/contact" className="secondary-cta">
                  Contact Our Team
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Proudly serving students across the United States 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default About;