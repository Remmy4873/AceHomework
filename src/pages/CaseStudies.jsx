import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

const CaseStudies = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Case Study Writing Service",
    "provider": {
      "@type": "Organization",
      "name": "AceHomework",
      "url": "https://acehomeworkk.com"
    },
    "description": "Professional case study writing at $15 per page with expert analysis, proper formatting, and comprehensive research support.",
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

  const caseStudyTypes = [
    {
      name: "Business Case Studies",
      description: "In-depth analysis of real-world business scenarios and decisions",
      formats: ["APA", "Harvard", "Chicago"],
      features: [
        "SWOT analysis",
        "Financial evaluation",
        "Strategic recommendations",
        "Executive summary"
      ],
      icon: "💼",
      price: "$15/page"
    },
    {
      name: "Medical Case Studies",
      description: "Detailed patient cases with diagnosis and treatment analysis",
      formats: ["AMA", "APA", "Vancouver"],
      features: [
        "Patient history",
        "Clinical findings",
        "Differential diagnosis",
        "Treatment plan"
      ],
      icon: "🏥",
      price: "$15/page"
    },
    {
      name: "Legal Case Studies",
      description: "Comprehensive analysis of legal precedents and court decisions",
      formats: ["Bluebook", "APA", "Chicago"],
      features: [
        "Case background",
        "Legal issues",
        "Court's decision",
        "Case significance"
      ],
      icon: "⚖️",
      price: "$15/page"
    },
    {
      name: "Psychology Case Studies",
      description: "Detailed examination of psychological cases and therapies",
      formats: ["APA"],
      features: [
        "Client background",
        "Assessment methods",
        "Diagnosis",
        "Treatment approach"
      ],
      icon: "🧠",
      price: "$15/page"
    }
  ];

  const formattingStyles = [
    {
      name: "Harvard Business Style",
      details: [
        "Title page with case title",
        "1.5 line spacing",
        "Clear section headings",
        "In-text citations",
        "Reference list"
      ],
      disciplines: ["Business Administration", "Management", "Marketing"]
    },
    {
      name: "APA 7th Edition",
      details: [
        "Running head",
        "Abstract (for longer cases)",
        "Method, Results, Discussion sections",
        "Proper in-text citations",
        "References page"
      ],
      disciplines: ["Psychology", "Social Sciences", "Education"]
    },
    {
      name: "AMA Style",
      details: [
        "Title page with author information",
        "Superscript numbering for citations",
        "Structured abstract (for medical cases)",
        "Reference list in citation order",
        "Proper table/figure formatting"
      ],
      disciplines: ["Medicine", "Healthcare", "Nursing"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Study Writing Service | $15/Page | AceHomework</title>
        <meta name="description" content="Professional case study writing at $15 per page with expert analysis and proper formatting for business, medical, legal, and psychology cases." />
        <meta name="keywords" content="case study writing service, business case studies, medical case reports, legal case analysis, $15 per page" />
        <meta property="og:title" content="Case Study Writing Service | $15/Page | AceHomework" />
        <meta property="og:description" content="Get professionally written case studies at only $15 per page with expert analysis and proper formatting." />
        <meta property="og:url" content="https://acehomeworkk.com/services/case-studies" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://acehomeworkk.com/services/case-studies" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="case-studies-page">
        <article className="case-studies-container">
          <header className="service-hero">
            <h1>Professional Case Study Writing Service</h1>
            <p className="hero-subtitle">Only <strong>$15 per page</strong> - Expertly Analyzed Cases in <strong>Business, Medical, Legal, and Psychology</strong></p>
            <div className="hero-badges">
              <span className="badge">Subject Experts</span>
              <span className="badge">Real-World Examples</span>
              <span className="badge">Thorough Analysis</span>
              <span className="badge">$15/Page</span>
            </div>
          </header>

          <section className="case-types-section" aria-labelledby="case-types-heading">
            <h2 id="case-types-heading">Types of Case Studies We Write</h2>
            <div className="case-types-grid">
              {caseStudyTypes.map((type, index) => (
                <div key={index} className="case-type-card" itemScope itemType="https://schema.org/CreativeWork">
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
                    <h4>Key Components:</h4>
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

          <section className="methodology-section">
            <h2>Our Case Study Methodology</h2>
            <div className="methodology-steps">
              <div className="methodology-step">
                <div className="step-number">1</div>
                <h3>Case Selection</h3>
                <p>We help identify appropriate cases based on your academic or professional needs</p>
              </div>
              <div className="methodology-step">
                <div className="step-number">2</div>
                <h3>Data Collection</h3>
                <p>Thorough research from credible sources to gather all relevant information</p>
              </div>
              <div className="methodology-step">
                <div className="step-number">3</div>
                <h3>Analysis</h3>
                <p>Expert evaluation using appropriate theoretical frameworks</p>
              </div>
              <div className="methodology-step">
                <div className="step-number">4</div>
                <h3>Writing</h3>
                <p>Clear, professional writing at $15 per page with proper structure</p>
              </div>
            </div>
          </section>

          <section className="formatting-section" aria-labelledby="formatting-heading">
            <h2 id="formatting-heading">Case Study Formatting</h2>
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
                      <h4>Common in These Fields:</h4>
                      <p>{style.disciplines.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pricing-section">
            <h2>Transparent Pricing</h2>
            <div className="pricing-card">
              <h3>Standard Case Study Service</h3>
              <div className="price">$15 <span>per page</span></div>
              <ul className="pricing-features">
                <li>All case study types</li>
                <li>5-7 day delivery (standard length)</li>
                <li>Proper citations and references</li>
                <li>Formatting to your requirements</li>
              </ul>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need a Professional Case Study?</h2>
              <p>Get started today and receive an expertly written case study at just $15 per page.</p>
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

export default CaseStudies;