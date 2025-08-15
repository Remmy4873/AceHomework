import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from './pages/About';
import Business from './pages/Business';
import CaseStudies from './pages/CaseStudies';
import Citation from './pages/Citation';
import Contact from './pages/Contact';
import Engineering from './pages/Engineering';
import EssayWriting from './pages/EssayWriting';
import Formatting from './pages/Formatting';
import Grammar from './pages/Grammar';
import Home from './components/Home';
import InternationalLanguages from './pages/InterLang';
import LiteratureReview from './pages/LiteratureReview';
import Math from './pages/Math';
import Navbar from './components/Navbar';
import Plagiarism from './pages/Plagiarism';
import Programming from './pages/Programming';
import ResearchPapers from './pages/ResearchPapers';
import Sciences from './pages/Sciences';
import Services from './pages/Services';
import ThesisDissertation from './pages/ThesisDissertation';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer'; // Import the Footer component
import WhatsAppBubble from './pages/WhatsAppBubble';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Services Routes - Updated Structure */}
          <Route path="/services">
            <Route index element={<Services />} />
            <Route path="essay-writing" element={<EssayWriting />} />
            <Route path=":serviceId" element={<Services />} />
            <Route path="/services/research-papers" element={<ResearchPapers />} />
            <Route path="/services/thesis-dissertation" element={<ThesisDissertation />} />
            <Route path="/services/case-studies" element={<CaseStudies />} />
            <Route path="/services/literature-reviews" element={<LiteratureReview />} />
            <Route path="/services/math-problems" element={<Math />} />
            <Route path="/services/science-assignments" element={<Sciences />} />
            <Route path="/services/Business-Studies" element={<Business />} />
            <Route path="/services/engineering-help" element={<Engineering />} />
            <Route path="/services/programming-help" element={<Programming />} />
            <Route path="/services/grammar-check" element={<Grammar />} />
            <Route path="/services/plagiarism-removal" element={<Plagiarism />} />
            <Route path="/services/formatting" element={<Formatting />} />
            <Route path="/services/citation-help" element={<Citation />} />
            <Route path="/services/languages-assistance" element={<InternationalLanguages />} />
          </Route>
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppBubble /> {/* WhatsApp Bubble for quick contact */}
        <Footer /> {/* Add the Footer component here */}
      </Router>
    </HelmetProvider>
  );
}

export default App;