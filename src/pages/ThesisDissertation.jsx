import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './ThesisDissertation.css';

const ThesisDissertation = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Thesis/Dissertation Writing Service",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional thesis and dissertation writing at $15 per page with expert formatting (APA, MLA, Chicago) and comprehensive research support.",
    "offers": {
      "@type": "Offer",
      "price": "15",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "15",
        "priceCurrency": "USD",
        "billingIncrement": "1",
        "unitCode": "PAGE"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    }
  };

  const serviceTypes = [
    {
      name: "Master's Thesis",
      description: "Comprehensive research project for master's degree completion",
      formats: ["APA", "MLA", "Chicago", "Harvard"],
      features: [
        "Literature review",
        "Methodology chapter",
        "Data analysis",
        "Conclusions"
      ],
      icon: "🎓",
      price: "$15/page"
    },
    {
      name: "PhD Dissertation",
      description: "Original contribution to knowledge for doctoral candidates",
      formats: ["APA", "Chicago", "Harvard", "IEEE"],
      features: [
        "5-chapter structure",
        "Theoretical framework",
        "Research design",
        "Findings presentation"
      ],
      icon: "📚",
      price: "$15/page"
    },
    {
      name: "Proposal Writing",
      description: "Professional research proposal for thesis/dissertation approval",
      formats: ["APA", "Chicago"],
      features: [
        "Problem statement",
        "Research questions",
        "Methodology outline",
        "Timeline"
      ],
      icon: "📝",
      price: "$15/page"
    },
    {
      name: "Editing Service",
      description: "Expert polishing of completed thesis/dissertation",
      formats: ["All academic styles"],
      features: [
        "Formatting correction",
        "Grammar/style editing",
        "Citation checking",
        "Structural review"
      ],
      icon: "✏️",
      price: "$15/page"
    }
  ];

  const formattingStyles = [
    {
      name: "APA 7th Edition",
      details: [
        "Title page with running head",
        "5-chapter structure",
        "Proper heading hierarchy",
        "Reference list",
        "Appendices formatting"
      ],
      disciplines: ["Social Sciences", "Education", "Psychology"]
    },
    {
      name: "Chicago Style",
      details: [
        "Title page with institutional requirements",
        "Footnotes/endnotes",
        "Bibliography",
        "Table of contents",
        "Figure/table formatting"
      ],
      disciplines: ["History", "Humanities", "Theology"]
    },
    {
      name: "MLA Format",
      details: [
        "Proper margins and spacing",
        "Works Cited page",
        "In-text citations",
        "Chapter headings",
        "Quotation formatting"
      ],
      disciplines: ["Literature", "Cultural Studies", "Arts"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Thesis/Dissertation Writing Service | $15/Page | AcademicPro</title>
        <meta name="description" content="Professional thesis and dissertation writing at $15 per page with expert formatting and comprehensive research support." />
        <meta name="keywords" content="thesis writing service, dissertation help, $15 per page, PhD dissertation, masters thesis" />
        <meta property="og:title" content="Thesis/Dissertation Writing Service | $15/Page | AcademicPro" />
        <meta property="og:description" content="Get expert thesis and dissertation help at only $15 per page with proper academic formatting." />
        <meta property="og:url" content="https://yourdomain.com/services/thesis-dissertation" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="thesis-dissertation-page">
        <article className="thesis-dissertation-container">
          <header className="service-hero">
            <h1>Thesis & Dissertation Writing Service</h1>
            <p className="hero-subtitle">Only <strong>$15 per page</strong> - Comprehensive Academic Support from <strong>Proposal to Defense</strong></p>
            <div className="hero-badges">
              <span className="badge">PhD Experts</span>
              <span className="badge">Formatting Included</span>
              <span className="badge">24/7 Support</span>
              <span className="badge">$15/Page</span>
            </div>
          </header>

          <section className="service-types-section" aria-labelledby="service-types-heading">
            <h2 id="service-types-heading">Our Thesis & Dissertation Services</h2>
            <div className="service-types-grid">
              {serviceTypes.map((type, index) => (
                <div key={index} className="service-type-card" itemScope itemType="https://schema.org/CreativeWork">
                  <div className="type-header">
                    <span className="type-icon" aria-hidden="true">{type.icon}</span>
                    <div>
                      <h3 itemProp="name">{type.name}</h3>
                      <div className="price-tag">{type.price}</div>
                    </div>
                  </div>
                  <p itemProp="description">{type.description}</p>
                  <div className="type-details">
                    <h4>Supported Formats:</h4>
                    <ul className="format-list">
                      {type.formats.map((format, i) => (
                        <li key={i} itemProp="citation">{format}</li>
                      ))}
                    </ul>
                    <h4>Key Features:</h4>
                    <ul className="features-list">
                      {type.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="formatting-section" aria-labelledby="formatting-heading">
            <h2 id="formatting-heading">Thesis/Dissertation Formatting</h2>
            <div className="formatting-accordion">
              {formattingStyles.map((style, index) => (
                <div key={index} className="format-card" itemScope itemType="https://schema.org/Article">
                  <h3 itemProp="name">{style.name} Format</h3>
                  <div itemProp="articleBody">
                    <h4>Key Requirements:</h4>
                    <ul className="requirements-list">
                      {style.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="format-footer">
                      <h4>Common in These Disciplines:</h4>
                      <p>{style.disciplines.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="process-section">
            <h2>Our Thesis/Dissertation Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>We discuss your requirements, timeline, and institutional guidelines</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Research</h3>
                <p>Our experts conduct thorough literature review and data collection</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Writing</h3>
                <p>Professional academic writing at $15 per page</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Revision</h3>
                <p>Unlimited revisions until you're completely satisfied</p>
              </div>
            </div>
          </section>

          <section className="pricing-section">
            <h2>Transparent Pricing</h2>
            <div className="pricing-card">
              <h3>Standard Thesis/Dissertation Service</h3>
              <div className="price">$15 <span>per page</span></div>
              <ul className="pricing-features">
                <li>All academic levels</li>
                <li>14-30 day delivery (based on length)</li>
                <li>Proper citations and references</li>
                <li>Formatting to your university's specs</li>
              </ul>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Start Your Thesis/Dissertation?</h2>
              <p>Get expert help at just $15 per page with guaranteed quality and proper formatting.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="primary-cta">
                  Order Now - $15/Page
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default ThesisDissertation;