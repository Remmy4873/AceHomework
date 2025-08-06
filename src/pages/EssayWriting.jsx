import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './EssayWriting.css';

const EssayWriting = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Essay Writing Service",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional essay writing service offering custom essays at $15 per page in all formats (APA, MLA, Chicago, Harvard) with quality guarantees.",
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

  const essayTypes = [
    {
      name: "Argumentative Essays",
      description: "Well-researched essays presenting a clear thesis with supporting evidence",
      formats: ["APA", "MLA", "Chicago", "Harvard", "IEEE"],
      uses: ["College applications", "Debate competitions", "Policy analysis"],
      icon: "🗣️",
      price: "$15/page"
    },
    {
      name: "Expository Essays",
      description: "Fact-based essays explaining concepts without personal opinion",
      formats: ["APA", "MLA", "Chicago"],
      uses: ["How-to guides", "Process explanations", "Concept breakdowns"],
      icon: "📖",
      price: "$15/page"
    },
    {
      name: "Narrative Essays",
      description: "Storytelling essays with personal experiences and reflections",
      formats: ["MLA", "Chicago"],
      uses: ["College admissions", "Personal statements", "Creative writing"],
      icon: "✍️",
      price: "$15/page"
    },
    {
      name: "Persuasive Essays",
      description: "Convincing arguments designed to sway the reader's opinion",
      formats: ["APA", "MLA", "Chicago", "Harvard"],
      uses: ["Editorials", "Policy proposals", "Marketing content"],
      icon: "💡",
      price: "$15/page"
    }
  ];

  const formattingStyles = [
    {
      name: "APA 7th Edition",
      details: [
        "Title page with running head",
        "12pt Times New Roman font",
        "1-inch margins on all sides",
        "Double-spaced text",
        "References page with hanging indent"
      ],
      disciplines: ["Psychology", "Education", "Social Sciences"]
    },
    {
      name: "MLA 9th Edition",
      details: [
        "Header with last name and page number",
        "12pt readable font (e.g., Times New Roman)",
        "Double-spaced throughout",
        "Works Cited page with core elements",
        "In-text citations with author-page format"
      ],
      disciplines: ["Literature", "Humanities", "Arts"]
    },
    {
      name: "Chicago/Turabian",
      details: [
        "Title page or first-page title",
        "Footnotes or endnotes system",
        "Bibliography page",
        "12pt Times New Roman or similar",
        "1-inch margins"
      ],
      disciplines: ["History", "Theology", "Classics"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Essay Writing Service | $15/Page | AcademicPro</title>
        <meta name="description" content="Get custom essays at $15 per page written by PhD experts in any format (APA, MLA, Chicago, Harvard). 100% original, on-time delivery with free revisions." />
        <meta name="keywords" content="essay writing service, $15 per page essays, APA format, MLA style, cheap essay writing" />
        <meta property="og:title" content="Professional Essay Writing Service | Only $15/Page | AcademicPro" />
        <meta property="og:description" content="Premium essay writing at $15 per page in all academic formats with quality guarantees." />
        <meta property="og:url" content="https://yourdomain.com/services/essay-writing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="essay-writing-page">
        <article className="essay-writing-container">
          <header className="essay-hero">
            <h1>Professional Essay Writing Service</h1>
            <p className="hero-subtitle">Only <strong>$15 per page</strong> - Perfectly Formatted Papers in <strong>APA, MLA, Chicago, Harvard</strong></p>
            <div className="hero-badges">
              <span className="badge">100% Original</span>
              <span className="badge">24/7 Support</span>
              <span className="badge">PhD Writers</span>
              <span className="badge">$15/Page</span>
            </div>
          </header>

          <section className="essay-types-section" aria-labelledby="essay-types-heading">
            <h2 id="essay-types-heading">Types of Essays We Write</h2>
            <div className="essay-types-grid">
              {essayTypes.map((type, index) => (
                <div key={index} className="essay-type-card" itemScope itemType="https://schema.org/CreativeWork">
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
                    <h4>Common Uses:</h4>
                    <ul className="uses-list">
                      {type.uses.map((use, i) => (
                        <li key={i}>{use}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="formatting-section" aria-labelledby="formatting-heading">
            <h2 id="formatting-heading">Our Formatting Expertise</h2>
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

          <section className="pricing-section">
            <h2>Transparent Pricing</h2>
            <div className="pricing-card">
              <h3>Standard Service</h3>
              <div className="price">$15 <span>per page</span></div>
              <ul className="pricing-features">
                <li>Undergraduate level writing</li>
                <li>7-day delivery</li>
                <li>Free formatting</li>
                <li>Unlimited revisions</li>
              </ul>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Order Your Essay?</h2>
              <p>Get started today and receive a high-quality, perfectly formatted paper at just $15 per page.</p>
              <div className="cta-buttons">
                <Link to="/order" className="primary-cta">
                  Order Now - $15/Page
                </Link>
                <Link to="/contact" className="secondary-cta">
                  Contact Support
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default EssayWriting;