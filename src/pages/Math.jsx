import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Math.css';

const Math = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mathematics Academic Assistance",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional mathematics help starting from $15 per assignment with solutions, proofs, and step-by-step explanations including Trigonometry.",
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
      "name": "Worldwide"
    }
  };

  const mathServices = [
    {
      name: "Calculus Help",
      description: "Step-by-step solutions for differentiation, integration, limits, and series",
      topics: ["Derivatives", "Integrals", "Multivariable", "Differential Equations"],
      icon: "∫",
      price: "From $15"
    },
    {
      name: "Algebra Assistance",
      description: "Comprehensive help with linear, abstract, and college algebra concepts",
      topics: ["Matrix Algebra", "Group Theory", "Polynomials", "Vector Spaces"],
      icon: "𝑥",
      price: "From $15"
    },
    {
      name: "Trigonometry",
      description: "Expert solutions for all trigonometric functions, identities, and equations",
      topics: ["Unit Circle", "Identities", "Graphing", "Inverse Functions", "Applications"],
      icon: "△",
      price: "From $15"
    },
    {
      name: "Statistics Solutions",
      description: "Probability distributions, hypothesis testing, regression analysis help",
      topics: ["ANOVA", "Bayesian Stats", "Statistical Modeling", "Data Analysis"],
      icon: "📈",
      price: "From $15"
    },
    {
      name: "Discrete Math",
      description: "Expert help with logic, proofs, combinatorics, and graph theory",
      topics: ["Set Theory", "Number Theory", "Algorithms", "Boolean Algebra"],
      icon: "ℕ",
      price: "From $15"
    }
  ];

  const problemTypes = [
    {
      name: "Trigonometry Problems",
      details: [
        "Solving trigonometric equations",
        "Proving trigonometric identities",
        "Graphing sine/cosine/tangent functions",
        "Law of Sines and Cosines applications",
        "Polar coordinates and complex numbers",
        "Trigonometric substitution in calculus"
      ],
      levels: ["High School", "College", "Advanced Placement"]
    },
    {
      name: "Mathematical Proofs",
      details: [
        "Direct, indirect, and contradiction proofs",
        "Mathematical induction",
        "Existence and uniqueness proofs",
        "Constructive proofs",
        "Formal proof writing"
      ],
      levels: ["Undergraduate", "Graduate", "PhD Level"]
    },
    {
      name: "Applied Mathematics",
      details: [
        "Mathematical modeling",
        "Numerical analysis",
        "Optimization problems",
        "Computational mathematics",
        "Real-world applications"
      ],
      levels: ["Engineering", "Physics", "Economics", "Computer Science"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mathematics Help | From $15 | Trigonometry Solutions | AcademicPro</title>
        <meta name="description" content="Get expert math help starting from $15 per assignment. Trigonometry solutions, calculus assistance, algebra help with step-by-step explanations." />
        <meta name="keywords" content="math help, trigonometry solutions, calculus assistance, algebra help, statistics solutions, $15 math help" />
        <meta property="og:title" content="Professional Mathematics Help | Trigonometry & More | From $15" />
        <meta property="og:description" content="Expert math solutions including Trigonometry starting from $15 with detailed explanations and proofs for all academic levels." />
        <meta property="og:url" content="https://yourdomain.com/services/math" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="math-page">
        <article className="math-container">
          <header className="math-hero">
            <h1>Professional Mathematics Assistance</h1>
            <p className="hero-subtitle">Starting from <strong>$15 per assignment</strong> - Detailed Solutions with <strong>Step-by-Step Explanations</strong></p>
            <div className="hero-badges">
              <span className="badge">100% Accurate</span>
              <span className="badge">PhD Mathematicians</span>
              <span className="badge">Trigonometry Experts</span>
              <span className="badge">From $15</span>
            </div>
          </header>

          <section className="math-services-section" aria-labelledby="services-heading">
            <h2 id="services-heading">Mathematics Services We Offer</h2>
            <div className="math-services-grid">
              {mathServices.map((service, index) => (
                <div key={index} className="math-service-card" itemScope itemType="https://schema.org/Service">
                  <div className="service-header">
                    <span className="service-icon" aria-hidden="true">{service.icon}</span>
                    <div>
                      <h3 itemProp="name">{service.name}</h3>
                      <div className="price-tag">{service.price}</div>
                    </div>
                  </div>
                  <p itemProp="description">{service.description}</p>
                  <div className="service-details">
                    <h4>Covered Topics:</h4>
                    <ul className="topics-list">
                      {service.topics.map((topic, i) => (
                        <li key={i} itemProp="keywords">{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="problem-types-section" aria-labelledby="problems-heading">
            <h2 id="problems-heading">Types of Math Problems We Solve</h2>
            <div className="problem-types-accordion">
              {problemTypes.map((type, index) => (
                <div key={index} className="problem-type-card" itemScope itemType="https://schema.org/CreativeWork">
                  <h3 itemProp="name">{type.name}</h3>
                  <div itemProp="description">
                    <h4>What We Cover:</h4>
                    <ul className="coverage-list">
                      {type.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="problem-footer">
                      <h4>Academic Levels:</h4>
                      <p>{type.levels.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="trigonometry-section" aria-labelledby="trigonometry-heading">
            <h2 id="trigonometry-heading">Comprehensive Trigonometry Help</h2>
            <div className="trigonometry-content">
              <div className="trigonometry-card">
                <h3>Trigonometry Concepts We Cover</h3>
                <div className="trig-topics">
                  <div className="trig-column">
                    <h4>Basic Trigonometry</h4>
                    <ul>
                      <li>Right triangle trigonometry</li>
                      <li>Unit circle understanding</li>
                      <li>Radian and degree measures</li>
                      <li>Reference angles</li>
                    </ul>
                  </div>
                  <div className="trig-column">
                    <h4>Advanced Topics</h4>
                    <ul>
                      <li>Trigonometric identities</li>
                      <li>Inverse trigonometric functions</li>
                      <li>Polar coordinates</li>
                      <li>Complex numbers</li>
                    </ul>
                  </div>
                  <div className="trig-column">
                    <h4>Applications</h4>
                    <ul>
                      <li>Wave motion problems</li>
                      <li>Harmonic motion</li>
                      <li>Navigation problems</li>
                      <li>Architecture applications</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="trigonometry-example">
                <h3>Sample Trigonometry Problem</h3>
                <div className="example-problem">
                  <p><strong>Problem:</strong> Solve for x: 2sin²x - 3cosx = 0 in the interval [0, 2π]</p>
                  <p><strong>Solution Approach:</strong> We would convert sin²x to 1-cos²x using Pythagorean identity, then solve the resulting quadratic equation in terms of cosx.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing-section">
            <h2>Transparent Pricing</h2>
            <div className="pricing-card">
              <h3>Standard Math Assignment</h3>
              <div className="price">From $15 <span>per problem</span></div>
              <ul className="pricing-features">
                <li>Trigonometry problems included</li>
                <li>High school to graduate level</li>
                <li>3-5 day delivery standard</li>
                <li>Step-by-step solutions</li>
                <li>Graphical representations when needed</li>
              </ul>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Struggling With Trigonometry or Other Math?</h2>
              <p>Get expert help today with comprehensive solutions starting from just $15 per problem.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="primary-cta">
                  Order Now - From $15
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Math;