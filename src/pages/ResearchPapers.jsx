import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './ResearchPapers.css';

const ResearchPapers = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Research Paper Writing Service",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional research paper writing service at $15 per page in all formats (APA, MLA, Chicago, Harvard) with quality guarantees.",
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

  const paperTypes = [
    {
      name: "Analytical Research Papers",
      description: "Break down complex topics into component parts for evaluation",
      formats: ["APA", "MLA", "Chicago", "Harvard"],
      uses: ["Literature analysis", "Case studies", "Policy evaluation"],
      icon: "🔍",
      price: "$15/page"
    },
    {
      name: "Argumentative Research Papers",
      description: "Present a thesis and support it with evidence from research",
      formats: ["APA", "MLA", "Chicago"],
      uses: ["Debatable topics", "Policy proposals", "Scientific controversies"],
      icon: "💬",
      price: "$15/page"
    },
    {
      name: "Experimental Research Papers",
      description: "Document original research with methodology and findings",
      formats: ["APA", "IEEE"],
      uses: ["Scientific studies", "Lab reports", "Empirical research"],
      icon: "🧪",
      price: "$15/page"
    },
    {
      name: "Survey Research Papers",
      description: "Present findings from systematic data collection",
      formats: ["APA", "Chicago"],
      uses: ["Market research", "Social science studies", "Opinion research"],
      icon: "📊",
      price: "$15/page"
    }
  ];

  const formattingStyles = [
    {
      name: "APA 7th Edition",
      details: [
        "Title page with running head",
        "Abstract (150-250 words)",
        "Method, Results, Discussion sections",
        "Proper in-text citations",
        "References page"
      ],
      disciplines: ["Psychology", "Education", "Social Sciences"]
    },
    {
      name: "MLA 9th Edition",
      details: [
        "Header with last name and page number",
        "Works Cited page",
        "Parenthetical citations",
        "12pt Times New Roman",
        "Double-spaced throughout"
      ],
      disciplines: ["Humanities", "Literature", "Arts"]
    },
    {
      name: "Chicago Style",
      details: [
        "Title page or first-page title",
        "Footnotes or endnotes",
        "Bibliography page",
        "12pt Times New Roman",
        "1-inch margins"
      ],
      disciplines: ["History", "Theology", "Classics"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Research Paper Writing Service | $15/Page | AcademicPro</title>
        <meta name="description" content="Get custom research papers at $15 per page written by experts in any format (APA, MLA, Chicago). 100% original research with proper citations." />
        <meta name="keywords" content="research paper service, $15 per page, APA research papers, MLA format, academic writing" />
        <meta property="og:title" content="Professional Research Paper Service | Only $15/Page | AcademicPro" />
        <meta property="og:description" content="Premium research papers at $15 per page in all academic formats with quality guarantees." />
        <meta property="og:url" content="https://yourdomain.com/services/research-papers" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="research-papers-page">
        <article className="research-papers-container">
          <header className="papers-hero">
            <h1>Professional Research Paper Service</h1>
            <p className="hero-subtitle">Only <strong>$15 per page</strong> - Well-Researched Papers in <strong>APA, MLA, Chicago</strong> Formats</p>
            <div className="hero-badges">
              <span className="badge">100% Original</span>
              <span className="badge">Proper Citations</span>
              <span className="badge">PhD Researchers</span>
              <span className="badge">$15/Page</span>
            </div>
          </header>

          <section className="paper-types-section" aria-labelledby="paper-types-heading">
            <h2 id="paper-types-heading">Types of Research Papers We Write</h2>
            <div className="paper-types-grid">
              {paperTypes.map((type, index) => (
                <div key={index} className="paper-type-card" itemScope itemType="https://schema.org/CreativeWork">
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
            <h2 id="formatting-heading">Research Paper Formatting</h2>
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
              <h3>Standard Research Paper</h3>
              <div className="price">$15 <span>per page</span></div>
              <ul className="pricing-features">
                <li>Undergraduate/Graduate level</li>
                <li>7-10 day delivery</li>
                <li>Proper citations and references</li>
                <li>Unlimited revisions</li>
              </ul>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Order Your Research Paper?</h2>
              <p>Get started today and receive a well-researched, properly formatted paper at just $15 per page.</p>
              <div className="cta-buttons">
                <Link to="/order" className="primary-cta">
                  Order Now - $15/Page
                </Link>
                <Link to="/contact" className="secondary-cta">
                  Ask About Bulk Discounts
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default ResearchPapers;