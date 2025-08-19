import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './InterLang.css';

const InternLang = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Foreign Language Academic Assistance",
    "provider": {
      "@type": "Organization",
      "name": "AceHomework",
      "url": "https://acehomeworkk.com"
    },
    "description": "Professional foreign language help starting from $15 per assignment for students in high school, college, and university.",
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

  const languageSubjects = [
    {
      name: "French",
      description: "Comprehensive help with French grammar, literature, and composition",
      topics: ["Grammar Exercises", "Essay Writing", "Literature Analysis", "Translation"],
      icon: "🇫🇷",
      price: "From $15",
      levels: ["High School", "College", "University"]
    },
    {
      name: "Spanish",
      description: "Expert assistance with Spanish language skills and cultural studies",
      topics: ["Verb Conjugation", "Creative Writing", "Hispanic Literature", "Business Spanish"],
      icon: "🇪🇸",
      price: "From $15",
      levels: ["High School", "College", "University"]
    },
    {
      name: "German",
      description: "Help with German grammar, technical writing, and linguistic analysis",
      topics: ["Case System", "Academic Papers", "German Philosophy", "Technical Translation"],
      icon: "🇩🇪",
      price: "From $15",
      levels: ["College", "University"]
    },
    {
      name: "Chinese",
      description: "Mandarin Chinese writing, character study, and business communication",
      topics: ["Character Writing", "HSK Prep", "Business Chinese", "Cultural Studies"],
      icon: "🇨🇳",
      price: "From $15",
      levels: ["High School", "College", "University"]
    },
    {
      name: "Italian",
      description: "Assistance with Italian literature, grammar, and conversation",
      topics: ["Dante Studies", "Verb Tenses", "Creative Writing", "Art History"],
      icon: "🇮🇹",
      price: "From $15",
      levels: ["College", "University"]
    },
    {
      name: "Japanese",
      description: "Help with kanji, business Japanese, and JLPT preparation",
      topics: ["Kanji Writing", "Keigo", "Manga Analysis", "Technical Japanese"],
      icon: "🇯🇵",
      price: "From $15",
      levels: ["High School", "College", "University"]
    }
  ];

  const assignmentTypes = [
    {
      name: "Language Essays",
      details: [
        "Grammatically perfect writing",
        "Cultural context analysis",
        "Proper citations in target language",
        "Native speaker review",
        "Academic formatting"
      ],
      examples: ["French Literature Analysis", "Spanish History Essay", "German Philosophy Paper"]
    },
    {
      name: "Translation Work",
      details: [
        "Accurate technical translation",
        "Cultural nuance preservation",
        "Bilingual formatting",
        "Proofreading by native speakers",
        "Specialized terminology"
      ],
      examples: ["Business Document Translation", "Academic Paper Translation", "Literary Translation"]
    },
    {
      name: "Oral Proficiency",
      details: [
        "Conversation practice scripts",
        "Pronunciation guides",
        "Presentation preparation",
        "Interview simulations",
        "Dialogue writing"
      ],
      examples: ["French Oral Exam", "Spanish Presentation", "Japanese Job Interview"]
    },
    {
      name: "Language Exams",
      details: [
        "DELF/DALF (French)",
        "DELE (Spanish)",
        "TestDaF (German)",
        "HSK (Chinese)",
        "JLPT (Japanese)"
      ],
      examples: ["Practice Tests", "Exam Strategies", "Scoring Rubrics", "Sample Responses"]
    }
  ];

  const popularCourses = {
    "High School": [
      "French 101-102", 
      "Spanish 101-102", 
      "AP Chinese", 
      "Japanese Basics"
    ],
    "College (Associate)": [
      "Intermediate French", 
      "Spanish Composition", 
      "German Literature", 
      "Business Chinese"
    ],
    "University (BA/MA)": [
      "Advanced French Grammar", 
      "Spanish Linguistics", 
      "German Philosophy", 
      "Classical Chinese"
    ]
  };

  const languageLevels = [
    {
      name: "Beginner (A1-A2)",
      concepts: ["Basic Vocabulary", "Simple Sentences", "Present Tense", "Everyday Phrases"],
      applications: ["Travel Communication", "Basic Reading", "Self-Introduction"]
    },
    {
      name: "Intermediate (B1-B2)",
      concepts: ["Complex Grammar", "Past/Future Tenses", "Idiomatic Expressions", "Formal Writing"],
      applications: ["Academic Writing", "Business Communication", "Media Comprehension"]
    },
    {
      name: "Advanced (C1-C2)",
      concepts: ["Subjunctive Mood", "Literary Analysis", "Technical Jargon", "Nuanced Translation"],
      applications: ["Professional Translation", "Academic Research", "Diplomatic Communication"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Foreign Language Help | From $15 | AceHomework</title>
        <meta name="description" content="Expert foreign language assignment help starting from $15 for high school, college, and university students. Essay writing, translation, and oral proficiency assistance." />
        <meta name="keywords" content="foreign language help, French homework, Spanish assignment, German writing, Chinese translation, language tutor, $15 language help" />
        <meta property="og:title" content="Foreign Language Academic Help | From $15" />
        <meta property="og:description" content="Professional foreign language assistance for students in high school, college and university programs worldwide." />
        <meta property="og:url" content="https://acehomeworkk.com/services/languages" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://acehomeworkk.com/services/languages" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="internlang-page">
        <article className="internlang-container">
          <header className="internlang-hero">
            <h1>Foreign Language Assistance</h1>
            <p className="hero-subtitle">Starting from <strong>$15 per assignment</strong> - Expert help with <strong>all major world languages</strong></p>
            <div className="hero-badges">
              <span className="badge">Native Speakers</span>
              <span className="badge">Language Experts</span>
              <span className="badge">Translation</span>
              <span className="badge">From $15</span>
            </div>
          </header>

          <section className="internlang-subjects-section" aria-labelledby="subjects-heading">
            <h2 id="subjects-heading">Language Subjects</h2>
            <p className="section-intro">We help students with all major world languages across all academic levels:</p>
            <div className="internlang-subjects-grid">
              {languageSubjects.map((subject, index) => (
                <div key={index} className="internlang-subject-card" itemScope itemType="https://schema.org/Service">
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
            <p className="section-intro">We specialize in these common language assignments for students:</p>
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

          <section className="language-levels-section" aria-labelledby="levels-heading">
            <h2 id="levels-heading">Language Proficiency Levels</h2>
            <div className="levels-grid">
              {languageLevels.map((level, index) => (
                <div key={index} className="level-card">
                  <h3>{level.name}</h3>
                  <div className="level-content">
                    <div className="level-concepts">
                      <h4>Key Concepts:</h4>
                      <ul>
                        {level.concepts.map((concept, i) => (
                          <li key={i}>{concept}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="level-applications">
                      <h4>Practical Applications:</h4>
                      <ul>
                        {level.applications.map((app, i) => (
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
            <h2 id="courses-heading">Popular Language Courses</h2>
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

          <section className="translation-section">
            <h2>Translation Example</h2>
            <div className="translation-example">
              <div className="process-guide">
                <h3>Translation Process</h3>
                <ol className="translation-steps">
                  <li><strong>Source Analysis:</strong> Understand original text</li>
                  <li><strong>Cultural Adaptation:</strong> Localize content</li>
                  <li><strong>Technical Translation:</strong> Accurate rendering</li>
                  <li><strong>Quality Check:</strong> Native speaker review</li>
                  <li><strong>Final Formatting:</strong> Target language standards</li>
                </ol>
              </div>
              <div className="sample-translation">
                <h3>Sample Translation</h3>
                <div className="sample-content">
                  <div className="translation-text">
                    <p className="original-text">
                      <strong>French:</strong> "L'éducation est l'arme la plus puissante pour changer le monde."
                    </p>
                    <p className="translated-text">
                      <strong>English:</strong> "Education is the most powerful weapon to change the world."
                    </p>
                  </div>
                  <div className="translation-notes">
                    <h4>Translation Notes:</h4>
                    <ul>
                      <li>Maintained the metaphorical "weapon" for impact</li>
                      <li>Adjusted article usage ("the world" vs "le monde")</li>
                      <li>Preserved the original sentence structure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing-section">
            <h2>Transparent Pricing</h2>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h3>High School Level</h3>
                <div className="price">From $15 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Basic language exercises</li>
                  <li>Short compositions</li>
                  <li>Vocabulary building</li>
                  <li>3-5 day turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>College Level</h3>
                <div className="price">From $20 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Intermediate writing</li>
                  <li>Literary analysis</li>
                  <li>Technical translation</li>
                  <li>5-7 day turnaround</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>University Level</h3>
                <div className="price">From $20 <span>per assignment</span></div>
                <ul className="pricing-features">
                  <li>Advanced grammar</li>
                  <li>Academic papers</li>
                  <li>Professional translation</li>
                  <li>7-10 day turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Need Help With a Language Assignment?</h2>
              <p>Get professional assistance with your foreign language work from native speakers and language experts.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="secondary-cta">
                  Ask About Urgent Deadlines
                </Link>
              </div>
              <p className="language-guarantee">🌍 Serving students worldwide in 10+ languages 🌍</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default InternLang;