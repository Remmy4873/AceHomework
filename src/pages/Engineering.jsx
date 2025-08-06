import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Engineering.css';

const Engineering = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Engineering Academic Assistance",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional engineering help starting from $20 per assignment for US students in high school, college, and university levels.",
    "offers": {
      "@type": "Offer",
      "price": "20",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "20",
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

  const engineeringDisciplines = [
    {
      name: "Mechanical Engineering",
      description: "Comprehensive help with thermodynamics, fluid mechanics, and machine design",
      topics: ["Statics & Dynamics", "Heat Transfer", "CAD Modeling", "Finite Element Analysis"],
      icon: "⚙️",
      price: "From $20",
      levels: ["College", "University"]
    },
    {
      name: "Electrical Engineering",
      description: "Expert assistance with circuit analysis, power systems, and electronics",
      topics: ["Digital Logic", "Signal Processing", "Control Systems", "Embedded Systems"],
      icon: "🔌",
      price: "From $20",
      levels: ["College", "University"]
    },
    {
      name: "Civil Engineering",
      description: "Structural analysis, transportation systems, and geotechnical engineering help",
      topics: ["Concrete Design", "Steel Structures", "Hydrology", "Soil Mechanics"],
      icon: "🏗️",
      price: "From $20",
      levels: ["College", "University"]
    },
    {
      name: "Engineering Fundamentals",
      description: "Introductory concepts for pre-engineering and high school students",
      topics: ["Physics Applications", "Technical Drawing", "Material Science", "Engineering Math"],
      icon: "📐",
      price: "From $15",
      levels: ["High School"]
    }
  ];

  const assignmentTypes = [
    {
      name: "Engineering Lab Reports",
      details: [
        "Proper scientific method structure",
        "Data analysis and visualization",
        "Error and uncertainty analysis",
        "Conclusions with engineering implications",
        "APA/ASME formatting"
      ],
      examples: ["Fluid Dynamics Lab", "Circuit Analysis Report", "Material Testing Results"]
    },
    {
      name: "Design Projects",
      details: [
        "Design specifications and requirements",
        "CAD models and technical drawings",
        "Prototyping and testing documentation",
        "Feasibility analysis",
        "Cost estimation"
      ],
      examples: ["Bridge Design Project", "Robot Design Challenge", "HVAC System Design"]
    },
    {
      name: "Technical Calculations",
      details: [
        "Step-by-step engineering solutions",
        "Free body diagrams",
        "MATLAB implementations",
        "Numerical methods",
        "Unit conversions and dimensional analysis"
      ],
      examples: ["Thermodynamics Problems", "Structural Load Calculations", "Control System Analysis"]
    }
  ];

  const engineeringSoftware = [
    {
      category: "CAD & Modeling Software",
      tools: [
        { name: "AutoCAD", proficiency: "Advanced", uses: ["2D Drafting", "Technical Drawings", "Blueprint Creation"] },
        { name: "SolidWorks", proficiency: "Expert", uses: ["3D Modeling", "Assembly Design", "Simulation"] },
        { name: "Revit", proficiency: "Advanced", uses: ["BIM Modeling", "Architectural Design", "MEP Systems"] },
        { name: "Fusion 360", proficiency: "Expert", uses: ["Parametric Modeling", "CAM Integration", "Generative Design"] }
      ],
      benefits: [
        "Precision technical drawings",
        "3D prototyping and visualization",
        "Industry-standard file formats",
        "Simulation and stress analysis"
      ]
    },
    {
      category: "Engineering Analysis Tools",
      tools: [
        { name: "ANSYS", proficiency: "Advanced", uses: ["FEA", "CFD", "Thermal Analysis"] },
        { name: "MATLAB", proficiency: "Expert", uses: ["Numerical Computing", "Algorithm Development", "Data Visualization"] },
        { name: "LabVIEW", proficiency: "Intermediate", uses: ["Instrument Control", "Data Acquisition", "Automated Testing"] },
        { name: "COMSOL", proficiency: "Advanced", uses: ["Multiphysics Simulation", "Electromagnetic Analysis", "Chemical Engineering"] }
      ],
      benefits: [
        "Complex problem solving",
        "Accurate simulations",
        "Parametric studies",
        "Visualization of results"
      ]
    },
    {
      category: "Specialized Engineering Software",
      tools: [
        { name: "ETABS", proficiency: "Advanced", uses: ["Structural Analysis", "Building Design", "Seismic Evaluation"] },
        { name: "PTC Creo", proficiency: "Intermediate", uses: ["Product Design", "Mechanical Engineering", "Manufacturing Prep"] },
        { name: "AutoCAD Civil 3D", proficiency: "Expert", uses: ["Civil Engineering Design", "Surveying", "Transportation Design"] },
        { name: "NI Multisim", proficiency: "Advanced", uses: ["Circuit Design", "SPICE Simulation", "PCB Layout"] }
      ],
      benefits: [
        "Discipline-specific solutions",
        "Regulatory compliance",
        "Optimization capabilities",
        "Real-world application"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Engineering Help | From $20 | USA Students | AcademicPro</title>
        <meta name="description" content="Expert engineering assignment help starting from $20 for US high school, college, and university students. Lab reports, design projects, and technical calculations." />
        <meta name="keywords" content="engineering assignment help, mechanical engineering, electrical engineering help, lab report writing, CAD design help, USA students, $20 engineering help" />
        <meta property="og:title" content="Engineering Help for USA Students | From $20" />
        <meta property="og:description" content="Professional engineering assignment assistance for American students at all academic levels." />
        <meta property="og:url" content="https://yourdomain.com/services/engineering" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="engineering-page">
        <article className="engineering-container">
          <header className="engineering-hero">
            <h1>Engineering Academic Assistance</h1>
            <p className="hero-subtitle">Starting from <strong>$20 per assignment</strong> - Trusted by <strong>US Engineering Students</strong></p>
            <div className="hero-badges">
              <span className="badge">Professional Engineers</span>
              <span className="badge">ABET-Aligned</span>
              <span className="badge">Technical Excellence</span>
              <span className="badge">From $20</span>
            </div>
          </header>

          <section className="engineering-disciplines-section" aria-labelledby="disciplines-heading">
            <h2 id="disciplines-heading">Engineering Disciplines We Cover</h2>
            <p className="section-intro">We help American students with all major engineering fields across academic levels:</p>
            <div className="engineering-disciplines-grid">
              {engineeringDisciplines.map((discipline, index) => (
                <div key={index} className="engineering-discipline-card" itemScope itemType="https://schema.org/Service">
                  <div className="discipline-header">
                    <span className="discipline-icon" aria-hidden="true">{discipline.icon}</span>
                    <div>
                      <h3 itemProp="name">{discipline.name}</h3>
                      <div className="price-tag">{discipline.price}</div>
                    </div>
                  </div>
                  <p itemProp="description">{discipline.description}</p>
                  <div className="discipline-details">
                    <h4>Key Topics:</h4>
                    <ul className="topics-list">
                      {discipline.topics.map((topic, i) => (
                        <li key={i} itemProp="keywords">{topic}</li>
                      ))}
                    </ul>
                    <div className="academic-levels">
                      <h4>Academic Levels:</h4>
                      <p>{discipline.levels.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="assignments-section" aria-labelledby="assignments-heading">
            <h2 id="assignments-heading">Engineering Assignment Types</h2>
            <p className="section-intro">We specialize in these common engineering assignments for US students:</p>
            <div className="assignments-accordion">
              {assignmentTypes.map((type, index) => (
                <div key={index} className="assignment-type-card" itemScope itemType="https://schema.org/CreativeWork">
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

          <section className="software-section" aria-labelledby="software-heading">
            <h2 id="software-heading">Engineering Software We Master</h2>
            <p className="section-intro">Our experts are proficient in industry-standard engineering software used in US academic programs:</p>
            
            <div className="software-tabs">
              {engineeringSoftware.map((category, index) => (
                <div key={index} className="software-category">
                  <h3 className="software-category-title">{category.category}</h3>
                  <div className="software-tools-grid">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="software-tool-card">
                        <div className="tool-header">
                          <h4>{tool.name}</h4>
                          <span className={`proficiency-badge ${tool.proficiency.toLowerCase()}`}>
                            {tool.proficiency}
                          </span>
                        </div>
                        <div className="tool-details">
                          <h5>Common Uses:</h5>
                          <ul className="tool-uses">
                            {tool.uses.map((use, useIndex) => (
                              <li key={useIndex}>{use}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="software-benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                      {category.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="lab-report-section">
            <h2>Engineering Lab Report Example</h2>
            <div className="lab-report-example">
              <div className="report-structure">
                <h3>Standard Lab Report Structure</h3>
                <ol className="report-sections">
                  <li><strong>Title Page:</strong> Experiment name, course info, date</li>
                  <li><strong>Abstract:</strong> Concise summary (150-200 words)</li>
                  <li><strong>Theory:</strong> Relevant engineering principles</li>
                  <li><strong>Procedure:</strong> Detailed experimental method</li>
                  <li><strong>Results:</strong> Data tables, graphs, calculations</li>
                  <li><strong>Discussion:</strong> Error analysis and conclusions</li>
                </ol>
              </div>
              <div className="report-sample">
                <h3>Sample Mechanical Lab Excerpt</h3>
                <div className="sample-content">
                  <p><strong>Experiment:</strong> Beam deflection under various loads</p>
                  <p><strong>Results:</strong> Maximum deflection of 2.34mm observed at 50N load</p>
                  <p><strong>Analysis:</strong> Experimental results within 8% of theoretical predictions</p>
                  <p><strong>Conclusion:</strong> Verified Euler-Bernoulli beam theory for small deflections</p>
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
                  <li>Introductory engineering concepts</li>
                  <li>Basic technical drawings</li>
                  <li>Simple lab reports</li>
                  <li>3-5 day turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>College Level</h3>
                <div className="price">From $25 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Intermediate engineering analysis</li>
                  <li>CAD modeling assistance</li>
                  <li>Technical calculations</li>
                  <li>5-7 day turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>University Level</h3>
                <div className="price">From $35 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Advanced engineering projects</li>
                  <li>Finite element analysis</li>
                  <li>Research papers</li>
                  <li>7-10 day turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Help With Engineering Assignments?</h2>
              <p>Get professional assistance from qualified engineers. Perfect for American students at all academic levels.</p>
              <div className="cta-buttons">
                <Link to="/order" className="primary-cta">
                  Order Now - From $20
                </Link>
                <Link to="/contact" className="secondary-cta">
                  Ask About Complex Projects
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Specializing in ABET-aligned US engineering programs 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Engineering;