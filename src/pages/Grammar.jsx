import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Grammar.css';

const Grammar = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Grammar Checking Service",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional grammar checking starting from $10 per paper for US students in high school, college, and university levels.",
    "offers": {
      "@type": "Offer",
      "price": "10",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "10",
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

  const grammarServices = [
    {
      name: "Essay Proofreading",
      description: "Comprehensive grammar, punctuation, and style checking for academic essays",
      features: ["Sentence structure", "Verb tense consistency", "Academic tone", "Flow improvement"],
      icon: "✍️",
      price: "From $10"
    },
    {
      name: "Research Paper Editing",
      description: "Technical grammar checking for academic research papers and publications",
      features: ["Citation formatting", "Technical terminology", "Complex sentence analysis", "Journal style compliance"],
      icon: "📄",
      price: "From $15"
    },
    {
      name: "Admissions Proofreading",
      description: "Polishing college applications, personal statements, and recommendation letters",
      features: ["Tone adjustment", "Clarity enhancement", "Impactful phrasing", "Error-free writing"],
      icon: "🎓",
      price: "From $20"
    },
    {
      name: "Business Writing Review",
      description: "Professional editing for business communications and formal documents",
      features: ["Formal tone", "Professional phrasing", "Conciseness", "Industry terminology"],
      icon: "💼",
      price: "From $12"
    }
  ];

  const grammarElements = [
    {
      category: "Grammar Fundamentals",
      items: [
        { name: "Subject-Verb Agreement", importance: "Critical", description: "Ensuring verbs match their subjects in number and person" },
        { name: "Pronoun Reference", importance: "High", description: "Clarifying pronoun antecedents for clear communication" },
        { name: "Modifier Placement", importance: "High", description: "Correcting misplaced and dangling modifiers" },
        { name: "Parallel Structure", importance: "Medium", description: "Maintaining consistent grammatical patterns" }
      ]
    },
    {
      category: "Punctuation & Mechanics",
      items: [
        { name: "Comma Usage", importance: "Critical", description: "Proper placement in complex and compound sentences" },
        { name: "Semicolon/Colon", importance: "High", description: "Advanced punctuation for sophisticated writing" },
        { name: "Apostrophe Rules", importance: "Medium", description: "Correct use in possessives and contractions" },
        { name: "Quotation Marks", importance: "Medium", description: "Proper integration with other punctuation" }
      ]
    },
    {
      category: "Style & Clarity",
      items: [
        { name: "Conciseness", importance: "High", description: "Eliminating wordiness and redundancy" },
        { name: "Active Voice", importance: "Medium", description: "Preferring strong, direct constructions" },
        { name: "Word Choice", importance: "High", description: "Selecting precise, appropriate vocabulary" },
        { name: "Sentence Variety", importance: "Medium", description: "Mixing sentence structures for better flow" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Grammar Check Service | From $10 | USA Students | AcademicPro</title>
        <meta name="description" content="Professional grammar checking starting from $10 for US high school, college, and university students. Essay proofreading, research paper editing, and admissions proofreading." />
        <meta name="keywords" content="grammar check, essay proofreading, research paper editing, college application help, writing improvement, USA students, affordable editing" />
        <meta property="og:title" content="Grammar Check Service for USA Students | From $10" />
        <meta property="og:description" content="Professional grammar checking and proofreading for American students at all academic levels." />
        <meta property="og:url" content="https://yourdomain.com/services/grammar" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="grammar-page">
        <article className="grammar-container">
          <header className="grammar-hero">
            <h1>Academic Grammar Checking</h1>
            <p className="hero-subtitle">Starting from <strong>$10 per paper</strong> - Trusted by <strong>US Students</strong></p>
            <div className="hero-badges">
              <span className="badge">English Experts</span>
              <span className="badge">24-48 Hour Turnaround</span>
              <span className="badge">Detailed Feedback</span>
              <span className="badge">From $10</span>
            </div>
          </header>

          <section className="grammar-services-section" aria-labelledby="services-heading">
            <h2 id="services-heading">Grammar Checking Services</h2>
            <p className="section-intro">We help American students improve their academic writing with these specialized services:</p>
            <div className="grammar-services-grid">
              {grammarServices.map((service, index) => (
                <div key={index} className="grammar-service-card" itemScope itemType="https://schema.org/Service">
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

          <section className="grammar-elements-section" aria-labelledby="elements-heading">
            <h2 id="elements-heading">Grammar Elements We Check</h2>
            <p className="section-intro">Our experts meticulously review these crucial aspects of your writing:</p>
            <div className="grammar-elements-accordion">
              {grammarElements.map((category, index) => (
                <div key={index} className="grammar-category-card">
                  <h3 className="category-title">{category.category}</h3>
                  <div className="elements-grid">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="grammar-element-card">
                        <div className="element-header">
                          <h4>{item.name}</h4>
                          <span className={`importance-badge ${item.importance.toLowerCase()}`}>
                            {item.importance}
                          </span>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pricing-section">
            <h2>Transparent Pricing for US Students</h2>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h3>High School Level</h3>
                <div className="price">From $10 <span>per paper</span></div>
                <ul className="pricing-features">
                  <li>Basic grammar and punctuation</li>
                  <li>Essay structure review</li>
                  <li>Simple sentence improvement</li>
                  <li>24-hour turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>College Level</h3>
                <div className="price">From $15 <span>per paper</span></div>
                <ul className="pricing-features">
                  <li>Advanced grammar checking</li>
                  <li>Academic style improvement</li>
                  <li>Citation formatting</li>
                  <li>48-hour turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>University Level</h3>
                <div className="price">From $20 <span>per paper</span></div>
                <ul className="pricing-features">
                  <li>Technical writing review</li>
                  <li>Journal style compliance</li>
                  <li>Complex sentence analysis</li>
                  <li>72-hour turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="process-section">
            <h2>Our Grammar Check Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Document Submission</h3>
                <p>Upload your paper with any specific instructions or requirements</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Expert Assignment</h3>
                <p>We match your paper with a specialist in your subject area</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Comprehensive Review</h3>
                <p>Thorough grammar, punctuation, and style checking</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Detailed Feedback</h3>
                <p>Receive your edited document with explanations for changes</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Professional Grammar Checking?</h2>
              <p>Improve your academic writing with our expert proofreading services. Perfect for American students at all levels.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="primary-cta">
                  Order Now - From $8
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Specializing in US academic writing standards 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Grammar;