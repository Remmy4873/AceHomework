import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Sciences.css';

const Sciences = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Science Academic Assistance",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional science help starting from $15 per assignment with lab reports, research papers, and step-by-step explanations across all scientific disciplines.",
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

  const scienceSubjects = [
    {
      name: "Biology",
      description: "Comprehensive help with cellular biology, genetics, ecology, and human anatomy",
      topics: ["Molecular Biology", "Evolution", "Physiology", "Microbiology"],
      icon: "🧬",
      price: "From $15"
    },
    {
      name: "Chemistry",
      description: "Expert assistance with organic, inorganic, physical, and analytical chemistry",
      topics: ["Stoichiometry", "Thermodynamics", "Chemical Bonding", "Lab Reports"],
      icon: "⚗️",
      price: "From $15"
    },
    {
      name: "Physics",
      description: "Detailed solutions for mechanics, electromagnetism, thermodynamics, and quantum physics",
      topics: ["Kinematics", "Optics", "Nuclear Physics", "Relativity"],
      icon: "🌌",
      price: "From $15"
    },
    {
      name: "Earth Science",
      description: "Help with geology, meteorology, oceanography, and environmental science",
      topics: ["Plate Tectonics", "Climate Change", "Mineralogy", "Hydrology"],
      icon: "🌍",
      price: "From $15"
    }
  ];

  const assignmentTypes = [
    {
      name: "Lab Reports",
      details: [
        "Proper scientific method structure",
        "Data analysis and interpretation",
        "Error analysis sections",
        "Graphs and visualizations",
        "Conclusion and discussion"
      ],
      formats: ["APA", "ACS", "MLA", "Chicago"]
    },
    {
      name: "Research Papers",
      details: [
        "Literature reviews",
        "Hypothesis formulation",
        "Methodology description",
        "Results presentation",
        "Peer-reviewed citations"
      ],
      formats: ["APA", "MLA", "Harvard", "Vancouver"]
    },
    {
      name: "Case Studies",
      details: [
        "Real-world scientific scenarios",
        "Problem-solving approaches",
        "Evidence-based conclusions",
        "Multidisciplinary connections",
        "Practical applications"
      ],
      formats: ["APA", "Chicago", "AMA"]
    }
  ];

  const biologySpecializations = [
    {
      category: "Molecular Biology",
      topics: ["DNA Replication", "Protein Synthesis", "Enzyme Kinetics", "PCR Techniques"]
    },
    {
      category: "Ecology",
      topics: ["Population Dynamics", "Biogeochemical Cycles", "Conservation Biology", "Ecosystem Services"]
    },
    {
      category: "Human Anatomy",
      topics: ["Organ Systems", "Neurobiology", "Cardiovascular Physiology", "Endocrinology"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Science Help | From $15 | Biology, Chemistry, Physics | AcademicPro</title>
        <meta name="description" content="Get expert science help starting from $15 per assignment. Biology, Chemistry, Physics assistance with lab reports, research papers, and case studies." />
        <meta name="keywords" content="science help, biology assistance, chemistry help, physics solutions, lab report writing, $15 science help" />
        <meta property="og:title" content="Professional Science Help | STEM Subjects | From $15" />
        <meta property="og:description" content="Expert science solutions starting from $15 with detailed explanations across all scientific disciplines." />
        <meta property="og:url" content="https://yourdomain.com/services/sciences" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="sciences-page">
        <article className="sciences-container">
          <header className="sciences-hero">
            <h1>Professional Science Assistance</h1>
            <p className="hero-subtitle">Starting from <strong>$15 per assignment</strong> - Lab Reports, Research Papers, and <strong>STEM Solutions</strong></p>
            <div className="hero-badges">
              <span className="badge">PhD Experts</span>
              <span className="badge">Accurate Data</span>
              <span className="badge">Proper Citations</span>
              <span className="badge">From $15</span>
            </div>
          </header>

          <section className="sciences-subjects-section" aria-labelledby="subjects-heading">
            <h2 id="subjects-heading">Science Subjects We Cover</h2>
            <div className="sciences-subjects-grid">
              {scienceSubjects.map((subject, index) => (
                <div key={index} className="science-subject-card" itemScope itemType="https://schema.org/Service">
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
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="assignments-section" aria-labelledby="assignments-heading">
            <h2 id="assignments-heading">Types of Science Assignments</h2>
            <div className="assignments-accordion">
              {assignmentTypes.map((type, index) => (
                <div key={index} className="assignment-type-card" itemScope itemType="https://schema.org/CreativeWork">
                  <h3 itemProp="name">{type.name}</h3>
                  <div itemProp="description">
                    <h4>What We Provide:</h4>
                    <ul className="features-list">
                      {type.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="assignment-footer">
                      <h4>Supported Formats:</h4>
                      <p>{type.formats.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="biology-specializations" aria-labelledby="biology-heading">
            <h2 id="biology-heading">Biology Specializations</h2>
            <div className="biology-grid">
              {biologySpecializations.map((specialization, index) => (
                <div key={index} className="biology-card">
                  <h3>{specialization.category}</h3>
                  <ul className="specialization-topics">
                    {specialization.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="lab-report-section">
            <h2>Lab Report Example</h2>
            <div className="lab-report-example">
              <div className="report-structure">
                <h3>Standard Lab Report Structure</h3>
                <ol className="report-sections">
                  <li><strong>Title:</strong> Concise description of experiment</li>
                  <li><strong>Abstract:</strong> Brief summary (100-200 words)</li>
                  <li><strong>Introduction:</strong> Background and hypothesis</li>
                  <li><strong>Methods:</strong> Detailed experimental procedure</li>
                  <li><strong>Results:</strong> Data with tables/figures</li>
                  <li><strong>Discussion:</strong> Interpretation of results</li>
                  <li><strong>References:</strong> Properly cited sources</li>
                </ol>
              </div>
              <div className="report-sample">
                <h3>Sample Chemistry Lab Excerpt</h3>
                <div className="sample-content">
                  <p><strong>Hypothesis:</strong> The rate of reaction will increase with temperature according to Arrhenius equation.</p>
                  <p><strong>Results:</strong> At 25°C, k=0.015 s⁻¹; at 35°C, k=0.028 s⁻¹; at 45°C, k=0.052 s⁻¹.</p>
                  <p><strong>Analysis:</strong> The calculated activation energy was 52.3 kJ/mol, consistent with literature values.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing-section">
            <h2>Transparent Pricing</h2>
            <div className="pricing-card">
              <h3>Standard Science Assignment</h3>
              <div className="price">From $15 <span>per assignment</span></div>
              <ul className="pricing-features">
                <li>High school to graduate level</li>
                <li>5-7 day delivery standard</li>
                <li>Proper scientific formatting</li>
                <li>Data visualization included</li>
                <li>Unlimited revisions</li>
              </ul>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Help With Science Assignments?</h2>
              <p>Get started today and receive accurate, well-researched science solutions starting from just $15 per assignment.</p>
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

export default Sciences;