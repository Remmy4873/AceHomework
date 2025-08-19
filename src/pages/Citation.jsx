import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Citation.css';

const Citation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Academic Citation Help",
    "provider": {
      "@type": "Organization",
      "name": "AceHomework",
      "url": "https://acehomeworkk.com"
    },
    "description": "Professional citation help starting from $8 per source for US students. APA, MLA, Chicago, and IEEE formatting examples included.",
    "offers": {
      "@type": "Offer",
      "price": "8",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "8",
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

  const citationServices = [
    {
      name: "APA 7th Edition",
      description: "American Psychological Association style for social sciences",
      examples: [
        {
          source: "Journal Article",
          citation: `Author, A. A., & Author, B. B. (Year). Title of article. 
          Title of Journal, Volume(Issue), page range. https://doi.org/xxxx`
        },
        {
          source: "Website",
          citation: `Author, A. A. (Year, Month Day). Title of webpage. Site Name. URL`
        }
      ],
      icon: "📝"
    },
    {
      name: "MLA 9th Edition",
      description: "Modern Language Association style for humanities",
      examples: [
        {
          source: "Book",
          citation: `Last Name, First Name. Title of Book. Publisher, Year.`
        },
        {
          source: "YouTube Video",
          citation: `Creator's Last Name, First Name. "Title of Video." YouTube, 
          uploaded by Channel Name, Day Month Year, URL.`
        }
      ],
      icon: "📖"
    },
    {
      name: "Chicago Style",
      description: "Chicago Manual of Style for history and arts",
      examples: [
        {
          source: "Newspaper Article",
          citation: `Last Name, First Name. "Article Title." Newspaper Name, 
          Month Day, Year. URL (if online).`
        },
        {
          source: "Interview",
          citation: `Last Name, First Name of Interviewee. Interview by Interviewer's Name. 
          Month Day, Year.`
        }
      ],
      icon: "🏛️"
    },
    {
      name: "IEEE",
      description: "Institute of Electrical and Electronics Engineers for technical papers",
      examples: [
        {
          source: "Conference Paper",
          citation: `[1] A. Author, "Title of paper," in Proceedings of Conference, 
          Location, Year, pp. xxx-xxx.`
        },
        {
          source: "Patent",
          citation: `[2] A. Inventor, "Title of patent," Country Patent x,xxx,xxx, 
          Month Day, Year.`
        }
      ],
      icon: "⚙️"
    }
  ];

  const citationSteps = [
    {
      step: "1",
      title: "Source Identification",
      description: "We identify all sources needing citation in your paper"
    },
    {
      step: "2",
      title: "Style Application",
      description: "We format each citation according to your required style guide"
    },
    {
      step: "3",
      title: "Consistency Check",
      description: "We ensure all citations follow the same formatting rules"
    },
    {
      step: "4",
      title: "Reference List",
      description: "We compile a perfectly formatted bibliography or works cited page"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Citation Help | From $10 | Style Examples | AceHomework</title>
        <meta name="description" content="Professional citation help starting from $8 per source with APA, MLA, Chicago, and IEEE examples for US students." />
        <meta name="keywords" content="citation help, APA format, MLA format, Chicago style, IEEE citations, citation examples, USA students" />
        <meta property="og:title" content="Academic Citation Help with Examples | From $8" />
        <meta property="og:description" content="Professional citation formatting service with style examples for American students." />
        <meta property="og:url" content="https://acehomeworkk.com/services/citation" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://acehomeworkk.com/services/citation" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="citation-page">
        <article className="citation-container">
          <header className="citation-hero">
            <h1>Academic Citation Help</h1>
            <p className="hero-subtitle">Starting from <strong>$8 per page</strong> with <strong>Style Examples</strong></p>
            <div className="hero-badges">
              <span className="badge">100% Accurate</span>
              <span className="badge">Same-Day Service</span>
              <span className="badge">All Major Styles</span>
              <span className="badge">From $10</span>
            </div>
          </header>

          <section className="citation-examples-section" aria-labelledby="examples-heading">
            <h2 id="examples-heading">Citation Style Examples</h2>
            <p className="section-intro">We format citations perfectly in all major academic styles:</p>
            <div className="citation-styles-grid">
              {citationServices.map((style, index) => (
                <div key={index} className="citation-style-card">
                  <div className="style-header">
                    <span className="style-icon" aria-hidden="true">{style.icon}</span>
                    <h3>{style.name}</h3>
                  </div>
                  <p>{style.description}</p>
                  <div className="citation-examples">
                    {style.examples.map((example, exIndex) => (
                      <div key={exIndex} className="citation-example">
                        <h4>{example.source}:</h4>
                        <pre className="citation-code">
                          <code>{example.citation}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="process-section">
            <h2>Our Citation Process</h2>
            <div className="process-steps">
              {citationSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pricing-section">
            <h2>Simple Pricing for Citation Help</h2>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h3>Basic Citation</h3>
                <div className="price">$8 <span>per page</span></div>
                <ul className="pricing-features">
                  <li>Standard source types</li>
                  <li>One citation style</li>
                  <li>24-hour turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>Advanced Citation</h3>
                <div className="price">$8 <span>per page</span></div>
                <ul className="pricing-features">
                  <li>Complex source types</li>
                  <li>Multiple style options</li>
                  <li>12-hour turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>Full Paper Citation</h3>
                <div className="price">$8 <span>per page</span></div>
                <ul className="pricing-features">
                  <li>All citations in paper</li>
                  <li>Reference list included</li>
                  <li>6-hour turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Perfect Citations?</h2>
              <p>Get professional citation help with guaranteed accuracy in any style.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="primary-cta">
                  Order Now - From $8
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Specializing in US academic standards 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Citation;