import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Programming.css';

const Programming = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Programming Academic Assistance",
    "provider": {
      "@type": "Organization",
      "name": "AcademicPro",
      "url": "https://yourdomain.com"
    },
    "description": "Professional programming help starting from $15 per assignment for US students in high school, college, and university levels.",
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

  const programmingLanguages = [
    {
      name: "Web Development",
      description: "Full-stack web development help with modern frameworks and technologies",
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Express", "MERN Stack"],
      icon: "🌐",
      difficulty: "Beginner to Advanced",
      price: "From $20"
    },
    {
      name: "Python Programming",
      description: "Comprehensive Python assistance from basics to data science applications",
      topics: ["Django/Flask", "Pandas/Numpy", "Machine Learning", "Automation", "Web Scraping"],
      icon: "🐍",
      difficulty: "Beginner to Advanced",
      price: "From $18"
    },
    {
      name: "Java & OOP",
      description: "Object-oriented programming concepts and Java application development",
      topics: ["JavaFX", "Spring Boot", "Android Development", "Data Structures", "Algorithms"],
      icon: "☕",
      difficulty: "Intermediate to Advanced",
      price: "From $25"
    },
    {
      name: "C/C++ Programming",
      description: "System programming and low-level development assistance",
      topics: ["Pointers/Memory", "Data Structures", "Game Development", "Embedded Systems", "OS Concepts"],
      icon: "🔧",
      difficulty: "Intermediate to Advanced",
      price: "From $25"
    }
  ];

  const assignmentTypes = [
    {
      name: "Coding Projects",
      details: [
        "Complete application development",
        "Code implementation from specifications",
        "Debugging and error resolution",
        "Unit testing and documentation",
        "Deployment assistance"
      ],
      examples: ["React Todo App", "Python Data Analysis", "Java Inventory System"]
    },
    {
      name: "Algorithm Problems",
      details: [
        "Leetcode-style problem solving",
        "Time/space complexity analysis",
        "Pseudocode development",
        "Optimization techniques",
        "Test case generation"
      ],
      examples: ["Sorting Algorithms", "Dynamic Programming", "Graph Traversals"]
    },
    {
      name: "Code Review & Debugging",
      details: [
        "Error identification and fixing",
        "Performance optimization",
        "Code quality assessment",
        "Style guide compliance",
        "Refactoring suggestions"
      ],
      examples: ["JavaScript Debugging", "Python PEP8 Compliance", "Memory Leak Detection"]
    }
  ];

  const webDevelopmentFrameworks = [
    {
      category: "Frontend Technologies",
      tools: [
        { name: "React", proficiency: "Expert", uses: ["SPAs", "Component Architecture", "State Management"] },
        { name: "Angular", proficiency: "Advanced", uses: ["Enterprise Apps", "TypeScript", "MVC Patterns"] },
        { name: "Vue.js", proficiency: "Advanced", uses: ["Progressive Apps", "Reactive Interfaces", "Lightweight Solutions"] },
        { name: "Next.js", proficiency: "Expert", uses: ["SSR Applications", "Static Site Generation", "Full-stack React"] }
      ],
      benefits: [
        "Responsive design implementation",
        "Cross-browser compatibility",
        "Component-based architecture",
        "State management solutions"
      ]
    },
    {
      category: "Backend Technologies",
      tools: [
        { name: "Node.js", proficiency: "Expert", uses: ["API Development", "Real-time Apps", "Microservices"] },
        { name: "Django", proficiency: "Advanced", uses: ["Rapid Development", "ORM Utilization", "Admin Panels"] },
        { name: "Spring Boot", proficiency: "Intermediate", uses: ["Enterprise Java", "Dependency Injection", "REST APIs"] },
        { name: "Express.js", proficiency: "Expert", uses: ["Lightweight Servers", "Middleware Integration", "Routing"] }
      ],
      benefits: [
        "Database integration",
        "Authentication systems",
        "API development",
        "Server-side logic"
      ]
    },
    {
      category: "Database & Deployment",
      tools: [
        { name: "MongoDB", proficiency: "Expert", uses: ["NoSQL Solutions", "Document Storage", "Scalable Backends"] },
        { name: "PostgreSQL", proficiency: "Advanced", uses: ["Relational Data", "Complex Queries", "ACID Compliance"] },
        { name: "Firebase", proficiency: "Advanced", uses: ["Real-time DB", "Authentication", "Serverless Apps"] },
        { name: "Docker", proficiency: "Intermediate", uses: ["Containerization", "Deployment", "Environment Management"] }
      ],
      benefits: [
        "Database schema design",
        "Query optimization",
        "Cloud deployment",
        "CI/CD pipelines"
      ]
    }
  ];

  const codingExamples = [
    {
      language: "JavaScript",
      problem: "Array Manipulation",
      solution: "// Double each number in array\nconst doubleNumbers = numbers.map(num => num * 2);",
      explanation: "Using Array.prototype.map() to transform each element"
    },
    {
      language: "Python",
      problem: "List Comprehension",
      solution: "# Squares of even numbers\nsquares = [x**2 for x in range(10) if x % 2 == 0]",
      explanation: "Compact syntax for creating new lists based on existing iterables"
    },
    {
      language: "React",
      problem: "State Management",
      solution: "const [count, setCount] = useState(0);\n<button onClick={() => setCount(c => c + 1)}>\n  Count: {count}\n</button>",
      explanation: "Using React hooks to manage component state"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Programming Help | From $15 | USA Students | AcademicPro</title>
        <meta name="description" content="Expert programming assignment help starting from $15 for US high school, college, and university students. Web development, Python, Java, and algorithm solutions." />
        <meta name="keywords" content="programming help, coding assignment help, web development help, Python programming, Java homework, React help, USA students, affordable coding help" />
        <meta property="og:title" content="Programming Help for USA Students | From $15" />
        <meta property="og:description" content="Professional programming assignment assistance for American students at all academic levels." />
        <meta property="og:url" content="https://yourdomain.com/services/programming" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="programming-page">
        <article className="programming-container">
          <header className="programming-hero">
            <h1>Programming Academic Assistance</h1>
            <p className="hero-subtitle">Starting from <strong>$15 per assignment</strong> - Trusted by <strong>US Computer Science Students</strong></p>
            <div className="hero-badges">
              <span className="badge">Professional Developers</span>
              <span className="badge">24/7 Support</span>
              <span className="badge">Code Comments</span>
              <span className="badge">From $15</span>
            </div>
          </header>

          <section className="programming-languages-section" aria-labelledby="languages-heading">
            <h2 id="languages-heading">Programming Languages We Cover</h2>
            <p className="section-intro">We help American students with all major programming languages and technologies:</p>
            <div className="programming-languages-grid">
              {programmingLanguages.map((language, index) => (
                <div key={index} className="programming-language-card" itemScope itemType="https://schema.org/Service">
                  <div className="language-header">
                    <span className="language-icon" aria-hidden="true">{language.icon}</span>
                    <div>
                      <h3 itemProp="name">{language.name}</h3>
                      <div className="price-tag">{language.price}</div>
                    </div>
                  </div>
                  <p itemProp="description">{language.description}</p>
                  <div className="language-details">
                    <h4>Key Topics:</h4>
                    <ul className="topics-list">
                      {language.topics.map((topic, i) => (
                        <li key={i} itemProp="keywords">{topic}</li>
                      ))}
                    </ul>
                    <div className="difficulty-level">
                      <h4>Difficulty Level:</h4>
                      <p>{language.difficulty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="assignments-section" aria-labelledby="assignments-heading">
            <h2 id="assignments-heading">Programming Assignment Types</h2>
            <p className="section-intro">We specialize in these common programming assignments for US students:</p>
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
                      <h4>Example Projects:</h4>
                      <p>{type.examples.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="webdev-section" aria-labelledby="webdev-heading">
            <h2 id="webdev-heading">Web Development Expertise</h2>
            <p className="section-intro">Our experts are proficient in industry-standard web technologies used in US academic programs:</p>
            
            <div className="webdev-tabs">
              {webDevelopmentFrameworks.map((category, index) => (
                <div key={index} className="webdev-category">
                  <h3 className="webdev-category-title">{category.category}</h3>
                  <div className="webdev-tools-grid">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="webdev-tool-card">
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
                  <div className="webdev-benefits">
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

          <section className="code-examples-section">
            <h2>Programming Code Examples</h2>
            <div className="code-examples-grid">
              {codingExamples.map((example, index) => (
                <div key={index} className="code-example-card">
                  <div className="example-header">
                    <span className="language-tag">{example.language}</span>
                    <h3>{example.problem}</h3>
                  </div>
                  <pre className="code-snippet">
                    <code>{example.solution}</code>
                  </pre>
                  <div className="code-explanation">
                    <h4>Explanation:</h4>
                    <p>{example.explanation}</p>
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
                <div className="price">From $15 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Introductory programming concepts</li>
                  <li>Basic web development (HTML/CSS)</li>
                  <li>Simple Python scripts</li>
                  <li>3-5 day turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>College Level</h3>
                <div className="price">From $25 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Intermediate programming</li>
                  <li>OOP concepts (Java, C++)</li>
                  <li>Basic algorithms</li>
                  <li>5-7 day turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>University Level</h3>
                <div className="price">From $35 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Advanced programming</li>
                  <li>Complex algorithms</li>
                  <li>Full-stack development</li>
                  <li>7-10 day turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Help With Programming Assignments?</h2>
              <p>Get professional assistance from experienced developers. Perfect for American students at all academic levels.</p>
              <div className="cta-buttons">
                <Link to="/order" className="primary-cta">
                  Order Now - From $15
                </Link>
                <Link to="/contact" className="secondary-cta">
                  Ask About Complex Projects
                </Link>
              </div>
              <p className="usa-guarantee">🇺🇸 Specializing in US computer science curricula 🇺🇸</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Programming;