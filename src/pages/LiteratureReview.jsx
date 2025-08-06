import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './LiteratureReview.css';

const LiteratureReview = () => {
  // Structured data targeting US college students
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Literature Review Writing Service",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "description": "Professional literature review writing for US college students at $15 per page. APA, MLA, Chicago formatting. Perfect for dissertations and research papers.",
    "offers": {
      "@type": "Offer",
      "price": "15",
      "priceCurrency": "USD",
      "eligibleRegion": {
        "@type": "Country",
        "name": "US"
      },
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "15",
        "priceCurrency": "USD",
        "billingIncrement": "1",
        "unitCode": "PAGE"
      }
    }
  };

  // Content tailored for US college students
  const serviceTypes = [
    {
      name: "Undergraduate Literature Review",
      description: "Comprehensive review for bachelor's level research papers and capstone projects",
      features: [
        "10-15 quality sources",
        "Thematic organization",
        "Basic critical analysis",
        "Proper citation"
      ],
      icon: "🎓",
      price: "$15/page",
      popular: true
    },
    {
      name: "Master's Level Literature Review",
      description: "In-depth review for graduate theses and research projects",
      features: [
        "25-50 scholarly sources",
        "Theoretical framework integration",
        "Gap identification",
        "APA/MLA formatting"
      ],
      icon: "📚",
      price: "$15/page"
    },
    {
      name: "PhD Dissertation Literature Review",
      description: "Exhaustive review demonstrating comprehensive mastery of research field",
      features: [
        "50-100+ peer-reviewed sources",
        "Critical synthesis of research",
        "Methodological analysis",
        "Chicago/Turabian formatting"
      ],
      icon: "🔍",
      price: "$15/page"
    },
    {
      name: "Systematic Literature Review",
      description: "Rigorous, protocol-driven review following PRISMA guidelines",
      features: [
        "Strict inclusion/exclusion criteria",
        "Quality assessment",
        "Meta-analysis options",
        "Publication-ready formatting"
      ],
      icon: "📊",
      price: "$15/page"
    }
  ];

  const formattingStyles = [
    {
      name: "APA 7th Edition",
      details: [
        "Running head and page numbers",
        "Level headings for organization",
        "Proper in-text citations",
        "Reference list with DOI links",
        "12pt Times New Roman"
      ],
      commonCourses: ["Psychology", "Education", "Social Sciences"]
    },
    {
      name: "MLA 9th Edition",
      details: [
        "Works Cited page",
        "Parenthetical citations",
        "No title page required",
        "1-inch margins",
        "Double spacing"
      ],
      commonCourses: ["English", "Humanities", "Liberal Arts"]
    },
    {
      name: "Chicago Style",
      details: [
        "Footnotes or endnotes",
        "Bibliography page",
        "Title page with university info",
        "Block quotes formatting",
        "Proper heading hierarchy"
      ],
      commonCourses: ["History", "Theology", "Political Science"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Literature Review Writing Service for US College Students | $15/Page</title>
        <meta name="description" content="Get A+ quality literature reviews for your US college courses at $15 per page. Expert writers familiar with APA, MLA, Chicago styles. 24/7 support for students." />
        <meta name="keywords" content="literature review service, college paper help, US students, APA literature review, cheap academic writing, $15 per page" />
        <meta property="og:title" content="Literature Review Help for US College Students | $15/Page | AcademicPro" />
        <meta property="og:description" content="Professional literature review writing service tailored for American university students at only $15 per page." />
        <meta property="og:url" content="https://yourdomain.com/services/literature-review" />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="literature-review-page">
        <article className="literature-review-container">
          <header className="service-hero">
            <h1>Literature Review Writing Service for US College Students</h1>
            <p className="hero-subtitle">Only <strong>$15 per page</strong> - Perfectly Formatted Reviews in <strong>APA, MLA, Chicago</strong> Style</p>
            <div className="hero-badges">
              <span className="badge">US-Based Writers</span>
              <span className="badge">University Standards</span>
              <span className="badge">24/7 Support</span>
              <span className="badge">$15/Page</span>
            </div>
          </header>

          <section className="benefits-section">
            <h2 className="sr-only">Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>📅 On-Time Delivery</h3>
                <p>Never miss another deadline with our guaranteed delivery</p>
              </div>
              <div className="benefit-card">
                <h3>🏫 US College Expertise</h3>
                <p>Writers familiar with Harvard, Stanford, UC system requirements</p>
              </div>
              <div className="benefit-card">
                <h3>✍️ Proper Formatting</h3>
                <p>APA, MLA, Chicago styles exactly as your professor expects</p>
              </div>
              <div className="benefit-card">
                <h3>🔎 Plagiarism-Free</h3>
                <p>Turnitin-ready papers with originality reports available</p>
              </div>
            </div>
          </section>

          <section className="service-types-section" aria-labelledby="service-types-heading">
            <h2 id="service-types-heading">Literature Review Services We Offer</h2>
            <p className="section-subtitle">Tailored for American university students at all academic levels</p>
            <div className="service-types-grid">
              {serviceTypes.map((type, index) => (
                <div key={index} className={`service-type-card ${type.popular ? 'popular-card' : ''}`} itemScope itemType="https://schema.org/CreativeWork">
                  {type.popular && <div className="popular-badge">Most Popular</div>}
                  <div className="type-header">
                    <span className="type-icon" aria-hidden="true">{type.icon}</span>
                    <div>
                      <h3 itemProp="name">{type.name}</h3>
                      <div className="price-tag">{type.price}</div>
                    </div>
                  </div>
                  <p itemProp="description">{type.description}</p>
                  <div className="type-details">
                    <h4>Includes:</h4>
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
            <h2 id="formatting-heading">Literature Review Formatting</h2>
            <p className="section-subtitle">We follow exact formatting requirements for US universities</p>
            <div className="formatting-accordion">
              {formattingStyles.map((style, index) => (
                <div key={index} className="format-card" itemScope itemType="https://schema.org/Article">
                  <h3 itemProp="name">{style.name} Format</h3>
                  <div itemProp="articleBody">
                    <h4>Key Requirements We Follow:</h4>
                    <ul className="requirements-list">
                      {style.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="format-footer">
                      <h4>Common in These US College Courses:</h4>
                      <p>{style.commonCourses.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="process-section">
            <h2>Our Literature Review Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Topic Analysis</h3>
                <p>We analyze your research question and professor's requirements</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Database Research</h3>
                <p>Searching JSTOR, PubMed, ERIC, and other academic databases</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Thematic Organization</h3>
                <p>Grouping sources by themes, methodologies, or chronology</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Critical Writing</h3>
                <p>Synthesizing sources with proper citations at $15/page</p>
              </div>
            </div>
          </section>

          <section className="pricing-section">
            <h2>Simple, Transparent Pricing</h2>
            <div className="pricing-card">
              <h3>Standard Literature Review Service</h3>
              <div className="price">$15 <span>per page</span></div>
              <ul className="pricing-features">
                <li>All academic levels</li>
                <li>5-10 day delivery (based on length)</li>
                <li>Minimum 10 scholarly sources</li>
                <li>Unlimited revisions</li>
                <li>Formatting included</li>
              </ul>
              <div className="urgency-pricing">
                <h4>Need it faster?</h4>
                <ul>
                  <li>3-day delivery: +$3/page</li>
                  <li>24-hour delivery: +$7/page</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Struggling With Your Literature Review?</h2>
              <p>Let our US-based academic experts help you get the grade you deserve at just $15 per page.</p>
              <div className="cta-buttons">
                <Link to="/order" className="primary-cta">
                  Order Now - $15/Page
                </Link>
                <Link to="/samples/literature-review" className="secondary-cta">
                  View Sample
                </Link>
              </div>
              <p className="guarantee-text">✅ 100% Satisfaction Guarantee | 🔒 Confidential Service</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default LiteratureReview;