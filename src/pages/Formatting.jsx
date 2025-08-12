import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Formatting.css';

const Formatting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Academic Formatting Service",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional academic paper formatting starting from $10 per paper for US students in high school, college, and university levels.",
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

  const formattingServices = [
    {
      name: "APA Formatting",
      description: "Complete APA 7th edition style compliance for your papers",
      features: ["Title page setup", "Running head", "Reference list", "In-text citations"],
      icon: "📝",
      price: "From $10"
    },
    {
      name: "MLA Formatting",
      description: "Precise MLA 9th edition formatting for humanities papers",
      features: ["Header setup", "Works Cited page", "Parenthetical citations", "Heading styles"],
      icon: "📖",
      price: "From $10"
    },
    {
      name: "Chicago Style",
      description: "Chicago/Turabian formatting for history and social sciences",
      features: ["Footnotes/endnotes", "Bibliography", "Title page", "Block quotes"],
      icon: "🏛️",
      price: "From $12"
    },
    {
      name: "Thesis Formatting",
      description: "Graduate-level dissertation and thesis formatting",
      features: ["Chapter styles", "Table of contents", "Figure numbering", "Margin compliance"],
      icon: "🎓",
      price: "From $20"
    }
  ];

  const formattingElements = [
    {
      category: "Structural Elements",
      items: [
        { name: "Title Page", importance: "Critical", description: "Properly formatted title page with all required elements" },
        { name: "Headings", importance: "High", description: "Correct heading hierarchy and styling" },
        { name: "Page Numbers", importance: "High", description: "Proper placement and formatting" },
        { name: "Margins & Spacing", importance: "Medium", description: "Precise measurements per style guide" }
      ]
    },
    {
      category: "Citation Elements",
      items: [
        { name: "Reference List", importance: "Critical", description: "Alphabetized and properly formatted" },
        { name: "In-text Citations", importance: "Critical", description: "Correct author-date or numerical format" },
        { name: "Footnotes/Endnotes", importance: "High", description: "Proper numbering and formatting" },
        { name: "DOI/URL Formatting", importance: "Medium", description: "Correct digital source presentation" }
      ]
    },
    {
      category: "Special Elements",
      items: [
        { name: "Tables & Figures", importance: "High", description: "Proper numbering, titles, and placement" },
        { name: "Block Quotes", importance: "Medium", description: "Correct indentation and citation" },
        { name: "Appendices", importance: "Medium", description: "Proper labeling and organization" },
        { name: "Abstract", importance: "High", description: "Formatting according to discipline standards" }
      ]
    }
  ];

  const styleGuides = [
    {
      name: "APA 7th Edition",
      latestUpdate: "2019",
      commonUse: "Social Sciences, Education, Psychology",
      keyFeatures: ["Author-date citations", "Running head", "Reference list"]
    },
    {
      name: "MLA 9th Edition",
      latestUpdate: "2021",
      commonUse: "Humanities, Literature, Arts",
      keyFeatures: ["Works Cited page", "Parenthetical citations", "No title page required"]
    },
    {
      name: "Chicago 17th Ed.",
      latestUpdate: "2017",
      commonUse: "History, Business, Fine Arts",
      keyFeatures: ["Notes-bibliography", "Author-date option", "Detailed footnote rules"]
    },
    {
      name: "IEEE",
      latestUpdate: "2018",
      commonUse: "Engineering, Computer Science",
      keyFeatures: ["Numerical citations", "Reference numbering", "Technical paper standards"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Paper Formatting Service | From $10 | USA Students | AcademicPro</title>
        <meta name="description" content="Professional academic formatting starting from $10 for US high school, college, and university students. APA, MLA, Chicago, and thesis formatting." />
        <meta name="keywords" content="paper formatting, APA formatting, MLA help, Chicago style, thesis formatting, USA students, affordable formatting" />
        <meta property="og:title" content="Academic Formatting Service for USA Students | From $10" />
        <meta property="og:description" content="Professional paper formatting assistance for American students at all academic levels." />
        <meta property="og:url" content="https://yourdomain.com/services/formatting" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="formatting-page">
        <article className="formatting-container">
          <header className="formatting-hero">
            <h1>Academic Paper Formatting</h1>
            <p className="hero-subtitle">Starting from <strong>$10 per paper</strong> - Trusted by <strong>US Students</strong></p>
            <div className="hero-badges">
              <span className="badge">Style Guide Experts</span>
              <span className="badge">24-Hour Turnaround</span>
              <span className="badge">Precision Formatting</span>
              <span className="badge">From $10</span>
            </div>
          </header>

          <section className="formatting-services-section" aria-labelledby="services-heading">
            <h2 id="services-heading">Formatting Services</h2>
            <p className="section-intro">We help American students with these academic formatting services:</p>
            <div className="formatting-services-grid">
              {formattingServices.map((service, index) => (
                <div key={index} className="formatting-service-card" itemScope itemType="https://schema.org/Service">
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

          <section className="elements-section" aria-labelledby="elements-heading">
            <h2 id="elements-heading">Formatting Elements We Perfect</h2>
            <p className="section-intro">Our experts meticulously format these crucial aspects of your paper:</p>
            <div className="elements-accordion">
              {formattingElements.map((category, index) => (
                <div key={index} className="formatting-category-card">
                  <h3 className="category-title">{category.category}</h3>
                  <div className="elements-grid">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="formatting-element-card">
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

          <section className="styleguides-section">
            <h2>Style Guides We Master</h2>
            <div className="styleguides-grid">
              {styleGuides.map((style, index) => (
                <div key={index} className="styleguide-card">
                  <h3>{style.name}</h3>
                  <div className="styleguide-meta">
                    <span className="update-badge">Updated: {style.latestUpdate}</span>
                    <span className="use-case">{style.commonUse}</span>
                  </div>
                  <div className="styleguide-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {style.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
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
                  <li>Basic formatting (APA/MLA)</li>
                  <li>Title page setup</li>
                  <li>Reference list</li>
                  <li>24-hour turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>College Level</h3>
                <div className="price">From $15 <span>per paper</span></div>
                <ul className="pricing-features">
                  <li>Advanced formatting</li>
                  <li>Footnotes/endnotes</li>
                  <li>Table/figure formatting</li>
                  <li>48-hour turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>University Level</h3>
                <div className="price">From $20 <span>per paper</span></div>
                <ul className="pricing-features">
                  <li>Thesis/dissertation formatting</li>
                  <li>Chapter styles</li>
                  <li>Table of contents</li>
                  <li>72-hour turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="process-section">
            <h2>Our Formatting Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Style Guide Analysis</h3>
                <p>We review your assignment requirements and select the appropriate style guide</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Structural Formatting</h3>
                <p>We implement all structural elements (margins, headings, page numbers)</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Citation Perfection</h3>
                <p>We meticulously format all citations and reference entries</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Quality Assurance</h3>
                <p>We perform a final check against the style guide specifications</p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Perfect Paper Formatting?</h2>
              <p>Get professional formatting services to ensure your paper meets all style requirements.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="primary-cta">
                  Order Now - From $8
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Specializing in US academic style standards 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Formatting;