import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Business.css';

const Business = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business & Economics Academic Assistance",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional business and economics help starting from $15 per assignment for US students in high school, college, and university.",
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

  const businessSubjects = [
    {
      name: "Business Administration",
      description: "Comprehensive help with management principles, organizational behavior, and leadership theories",
      topics: ["Strategic Planning", "Operations Management", "HR Management", "Business Ethics"],
      icon: "📊",
      price: "From $15",
      levels: ["High School", "College", "University"]
    },
    {
      name: "Finance & Accounting",
      description: "Expert assistance with financial analysis, accounting principles, and investment strategies",
      topics: ["Financial Statements", "Ratio Analysis", "Budgeting", "Taxation"],
      icon: "💰",
      price: "From $15",
      levels: ["College", "University"]
    },
    {
      name: "Economics",
      description: "Micro and macroeconomic theory, econometrics, and real-world economic analysis",
      topics: ["Supply & Demand", "Market Structures", "GDP Analysis", "Monetary Policy"],
      icon: "📈",
      price: "From $15",
      levels: ["High School", "College", "University"]
    },
    {
      name: "Marketing",
      description: "Help with market research, consumer behavior, and digital marketing strategies",
      topics: ["SWOT Analysis", "4Ps Framework", "SEO/SEM", "Social Media Marketing"],
      icon: "📢",
      price: "From $15",
      levels: ["High School", "College", "University"]
    },
    {
      name: "Entrepreneurship",
      description: "Guidance on business plans, startup funding, and venture development",
      topics: ["Lean Canvas", "Pitch Decks", "Crowdfunding", "Small Business Mgmt"],
      icon: "💡",
      price: "From $15",
      levels: ["High School", "College", "University"]
    }
  ];

  const assignmentTypes = [
    {
      name: "Case Studies",
      details: [
        "Harvard-style case analysis",
        "SWOT/PESTEL analysis",
        "Recommendations with justification",
        "Financial calculations when needed",
        "Proper business formatting"
      ],
      examples: ["Netflix Disruption Case", "Tesla Market Analysis", "Starbucks Expansion Strategy"]
    },
    {
      name: "Business Plans",
      details: [
        "Executive summary",
        "Market analysis section",
        "Financial projections",
        "Operational plan",
        "Risk assessment"
      ],
      examples: ["Startup Business Plan", "Expansion Proposal", "Product Launch Strategy"]
    },
    {
      name: "Economic Analysis",
      details: [
        "Supply-demand curves",
        "Cost-benefit analysis",
        "Elasticity calculations",
        "Market equilibrium",
        "Policy impact studies"
      ],
      examples: ["Minimum Wage Effects", "Inflation Analysis", "Trade Policy Evaluation"]
    },
    {
      name: "Financial Reports",
      details: [
        "Ratio calculations",
        "Trend analysis",
        "Benchmarking",
        "Investment appraisal",
        "Excel modeling"
      ],
      examples: ["Apple Financial Health", "Amazon Stock Valuation", "Local Business Audit"]
    }
  ];

  const popularCourses = {
    "High School": ["Intro to Business", "Economics 101", "Personal Finance", "Entrepreneurship Basics"],
    "College (Associate)": ["Principles of Management", "Microeconomics", "Macroeconomics", "Business Communications"],
    "University (BBA/MBA)": ["Corporate Finance", "Econometrics", "International Economics", "Organizational Behavior"]
  };

  const economicModels = [
    {
      name: "Microeconomic Models",
      concepts: ["Supply-Demand Curve", "Production Possibility Frontier", "Cost Structures", "Game Theory"],
      applications: ["Price Setting", "Market Entry Decisions", "Competitive Strategy"]
    },
    {
      name: "Macroeconomic Models",
      concepts: ["Circular Flow Model", "AD-AS Model", "IS-LM Framework", "Phillips Curve"],
      applications: ["Fiscal Policy Analysis", "Monetary Policy Effects", "Economic Growth"]
    },
    {
      name: "Econometric Analysis",
      concepts: ["Regression Models", "Time Series Analysis", "Hypothesis Testing", "Forecasting"],
      applications: ["Market Research", "Policy Evaluation", "Risk Assessment"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business & Economics Help | From $15 | USA Students | AcademicPro</title>
        <meta name="description" content="Expert business and economics assignment help starting from $15 for US high school, college, and university students. Case studies, economic analysis, and business plans." />
        <meta name="keywords" content="business assignment help, economics homework, case study writing, business plan help, economic analysis, USA students, $15 business help" />
        <meta property="og:title" content="Business & Economics Help for USA Students | From $15" />
        <meta property="og:description" content="Professional business and economics assignment assistance for American students in high school, college and university programs." />
        <meta property="og:url" content="https://yourdomain.com/services/business" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="business-page">
        <article className="business-container">
          <header className="business-hero">
            <h1>Business & Economics Assistance</h1>
            <p className="hero-subtitle">Starting from <strong>$15 per assignment</strong> - Trusted by <strong>US Students</strong> in High School, College & University</p>
            <div className="hero-badges">
              <span className="badge">MBA Experts</span>
              <span className="badge">Economic Analysis</span>
              <span className="badge">US Curriculum</span>
              <span className="badge">From $15</span>
            </div>
          </header>

          <section className="business-subjects-section" aria-labelledby="subjects-heading">
            <h2 id="subjects-heading">Business & Economics Subjects</h2>
            <p className="section-intro">We help American students with all major business and economics disciplines across all academic levels:</p>
            <div className="business-subjects-grid">
              {businessSubjects.map((subject, index) => (
                <div key={index} className="business-subject-card" itemScope itemType="https://schema.org/Service">
                  <div className="subject-header">
                    <span className="subject-icon" aria-hidden="true">{subject.icon}</span>
                    <div>
                      <h3 itemProp="name">{subject.name}</h3>
                      <div className="price-tag">{subject.price}</div>
                    </div>
                  </div>
                  <p itemProp="description">{subject.description}</p>
                  <div className="subject-details">
                    <h4>Key Topics:</h4>
                    <ul className="topics-list">
                      {subject.topics.map((topic, i) => (
                        <li key={i} itemProp="keywords">{topic}</li>
                      ))}
                    </ul>
                    <div className="academic-levels">
                      <h4>Academic Levels:</h4>
                      <p>{subject.levels.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="assignments-section" aria-labelledby="assignments-heading">
            <h2 id="assignments-heading">Assignment Types</h2>
            <p className="section-intro">We specialize in these common business and economics assignments for US students:</p>
            <div className="assignments-grid-container">
              {assignmentTypes.map((type, index) => (
                <div key={index} className="assignment-grid-card" itemScope itemType="https://schema.org/CreativeWork">
                  <h3 itemProp="name">{type.name}</h3>
                  <div itemProp="description">
                    <h4>What We Deliver:</h4>
                    <ul className="features-list">
                      {type.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="assignment-footer">
                      <h4>Example Topics:</h4>
                      <p>{type.examples.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="economic-models-section" aria-labelledby="models-heading">
            <h2 id="models-heading">Economic Models We Cover</h2>
            <div className="models-grid">
              {economicModels.map((model, index) => (
                <div key={index} className="model-card">
                  <h3>{model.name}</h3>
                  <div className="model-content">
                    <div className="model-concepts">
                      <h4>Key Concepts:</h4>
                      <ul>
                        {model.concepts.map((concept, i) => (
                          <li key={i}>{concept}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="model-applications">
                      <h4>Practical Applications:</h4>
                      <ul>
                        {model.applications.map((app, i) => (
                          <li key={i}>{app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="courses-section" aria-labelledby="courses-heading">
            <h2 id="courses-heading">Popular US Courses We Help With</h2>
            <div className="courses-grid">
              {Object.entries(popularCourses).map(([level, courses], index) => (
                <div key={index} className="course-level-card">
                  <h3>{level}</h3>
                  <ul className="course-list">
                    {courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="case-study-section">
            <h2>Business & Economics Case Example</h2>
            <div className="case-study-example">
              <div className="structure-guide">
                <h3>Economic Analysis Structure</h3>
                <ol className="case-sections">
                  <li><strong>Introduction:</strong> Economic context & problem</li>
                  <li><strong>Theoretical Framework:</strong> Relevant economic models</li>
                  <li><strong>Data Analysis:</strong> Statistical evidence</li>
                  <li><strong>Findings:</strong> Interpretation of results</li>
                  <li><strong>Policy Implications:</strong> Recommendations</li>
                </ol>
              </div>
              <div className="sample-analysis">
                <h3>Sample Economic Problem</h3>
                <div className="sample-content">
                  <p><strong>Scenario:</strong> Impact of minimum wage increase on small businesses</p>
                  <p><strong>Analysis:</strong> Labor demand elasticity, cost structures, employment effects</p>
                  <p><strong>Model Used:</strong> Competitive labor market model with elasticity calculations</p>
                  <p><strong>Conclusion:</strong> 10% wage increase leads to 2-4% employment reduction in sector</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing-section">
            <h2>Transparent Pricing for US Students</h2>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h3>High School Level</h3>
                <div className="price">From $15 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Introductory concepts</li>
                  <li>Basic economic models</li>
                  <li>Simple business plans</li>
                  <li>3-5 day turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>College Level</h3>
                <div className="price">From $20 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Intermediate analysis</li>
                  <li>Economic calculations</li>
                  <li>Case study reports</li>
                  <li>5-7 day turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>University Level</h3>
                <div className="price">From $25 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Advanced econometrics</li>
                  <li>Complex financial models</li>
                  <li>MBA-level analyses</li>
                  <li>7-10 day turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Help With Business or Economics?</h2>
              <p>Get professional assistance with your assignments today. Perfect for American students at all academic levels.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="secondary-cta">
                  Ask About Urgent Deadlines
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Specializing in US curriculum requirements 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Business;