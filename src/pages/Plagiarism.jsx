import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Plagiarism.css';

const Plagiarism = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Plagiarism Removal Service",
    "provider": {
      "@type": "Organization",
      "name": "AceHomework",
      "url": "https://acehomeworkk.com"
    },
    "description": "Professional plagiarism removal and rewriting starting from $15 per page for US students in high school, college, and university levels.",
    "offers": {
      "@type": "Offer",
      "price": "15",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "15",
        "priceCurrency": "USD",
        "billingIncrement": "1",
        "unitCode": "ITEM"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  const plagiarismServices = [
    {
      name: "Content Rewriting",
      description: "Complete rewriting of plagiarized content while preserving original meaning",
      features: ["Word-to-word paraphrasing", "Structural reorganization", "Concept preservation", "Original expression"],
      icon: "✏️",
      price: "From $10"
    },
    {
      name: "Citation Correction",
      description: "Proper source attribution and citation formatting to eliminate plagiarism",
      features: ["APA/MLA/Chicago style", "In-text citations", "Reference list", "Source verification"],
      icon: "📚",
      price: "From $10"
    },
    {
      name: "Similarity Reduction",
      description: "Targeted rewriting to reduce similarity scores in plagiarism checkers",
      features: ["Turnitin optimization", "SafeAssign compatibility", "QuillBot alternative", "AI detection removal"],
      icon: "🔍",
      price: "From $10"
    },
    {
      name: "Thesis Paraphrasing",
      description: "Advanced rewriting for graduate-level work with technical accuracy",
      features: ["Academic tone preservation", "Terminology maintenance", "Research integrity", "Publication standards"],
      icon: "🎓",
      price: "From $15"
    }
  ];

  const plagiarismTools = [
    {
      name: "Turnitin",
      description: "Our experts understand Turnitin's algorithms to effectively reduce similarity",
      detection: "Text-matching, Word placement, Phrase patterns"
    },
    {
      name: "SafeAssign",
      description: "We rewrite to bypass SafeAssign's content fingerprinting technology",
      detection: "Concept matching, Sentence structure, Common phrases"
    },
    {
      name: "Copyscape",
      description: "Professional paraphrasing that passes Copyscape's web content checks",
      detection: "Online content matching, Partial phrase detection"
    },
    {
      name: "Grammarly Plagiarism",
      description: "Rewriting that avoids detection in Grammarly's database checks",
      detection: "Proprietary database matching"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Document Analysis",
      description: "We identify all plagiarized sections and similarity sources"
    },
    {
      step: "2",
      title: "Strategic Rewriting",
      description: "Our experts rewrite content using advanced paraphrasing techniques"
    },
    {
      step: "3",
      title: "Citation Review",
      description: "We ensure all sources are properly cited in your required format"
    },
    {
      step: "4",
      title: "Quality Assurance",
      description: "Final check for originality and academic integrity compliance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plagiarism Removal Service | From $15 | USA Students | AceHomework</title>
        <meta name="description" content="Professional plagiarism removal and rewriting starting from $15 for US high school, college, and university students. Turnitin, SafeAssign, and Copyscape solutions." />
        <meta name="keywords" content="plagiarism removal, rewrite my paper, Turnitin help, SafeAssign solution, plagiarism checker, USA students, affordable rewriting" />
        <meta property="og:title" content="Plagiarism Removal Service for USA Students | From $15" />
        <meta property="og:description" content="Professional plagiarism removal and content rewriting for American students at all academic levels." />
        <meta property="og:url" content="https://acehomeworkk.com/services/plagiarism" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://acehomeworkk.com/services/plagiarism" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="plagiarism-page">
        <article className="plagiarism-container">
          <header className="plagiarism-hero">
            <h1>Plagiarism Removal Service</h1>
            <p className="hero-subtitle">Starting from <strong>$15 per page</strong> - Trusted by <strong>US Students</strong></p>
            <div className="hero-badges">
              <span className="badge">100% Original</span>
              <span className="badge">24-48 Hour Turnaround</span>
              <span className="badge">Confidential</span>
              <span className="badge">From $15</span>
            </div>
          </header>

          <section className="plagiarism-services-section" aria-labelledby="services-heading">
            <h2 id="services-heading">Plagiarism Removal Services</h2>
            <p className="section-intro">We help American students eliminate plagiarism with these specialized services:</p>
            <div className="plagiarism-services-grid">
              {plagiarismServices.map((service, index) => (
                <div key={index} className="plagiarism-service-card" itemScope itemType="https://schema.org/Service">
                  <div className="service-header">
                    <span className="service-icon" aria-hidden="true">{service.icon}</span>
                    <div>
                      <h3 itemProp="name">{service.name}</h3>
                      <div className="price-tag">{service.price}</div>
                    </div>
                  </div>
                  <p itemProp="description">{service.description}</p>
                  <div className="service-details">
                    <h4>Key Features:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, i) => (
                        <li key={i} itemProp="keywords">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="tools-section" aria-labelledby="tools-heading">
            <h2 id="tools-heading">Plagiarism Checkers We Handle</h2>
            <p className="section-intro">Our experts understand how these plagiarism detection systems work:</p>
            <div className="tools-grid">
              {plagiarismTools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <div className="detection-methods">
                    <h4>Detection Methods:</h4>
                    <p>{tool.detection}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="process-section">
            <h2>Our Plagiarism Removal Process</h2>
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pricing-section">
            <h2>Transparent Pricing for US Students</h2>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h3>High School Level</h3>
                <div className="price">From $10 <span>per page</span></div>
                <ul className="pricing-features">
                  <li>Basic paraphrasing</li>
                  <li>Citation correction</li>
                  <li>Simple content rewriting</li>
                  <li>24-hour turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>College Level</h3>
                <div className="price">From $10 <span>per page</span></div>
                <ul className="pricing-features">
                  <li>Advanced rewriting</li>
                  <li>Technical term handling</li>
                  <li>Style preservation</li>
                  <li>48-hour turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>University Level</h3>
                <div className="price">From $15 <span>per page</span></div>
                <ul className="pricing-features">
                  <li>Research-level rewriting</li>
                  <li>Publication standards</li>
                  <li>Complex concept handling</li>
                  <li>72-hour turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="guarantee-section">
            <h2>Our Plagiarism Removal Guarantee</h2>
            <div className="guarantee-content">
              <div className="guarantee-points">
                <div className="guarantee-point">
                  <span className="guarantee-icon">✓</span>
                  <h3>Original Content</h3>
                  <p>We guarantee 100% original rewritten content that passes plagiarism checks</p>
                </div>
                <div className="guarantee-point">
                  <span className="guarantee-icon">✓</span>
                  <h3>Confidentiality</h3>
                  <p>Your documents and personal information are always kept secure</p>
                </div>
                <div className="guarantee-point">
                  <span className="guarantee-icon">✓</span>
                  <h3>Academic Integrity</h3>
                  <p>We maintain the highest standards of academic honesty in our work</p>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Plagiarism Removal Help?</h2>
              <p>Get professional rewriting services to ensure your work passes all plagiarism checks.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="primary-cta">
                  Order Now - From $10
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Specializing in US academic integrity standards 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Plagiarism;