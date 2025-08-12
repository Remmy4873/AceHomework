import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
      if (window.innerWidth >= 960) {
        setClick(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const academicCategories = [
    {
      title: 'Writing Services',
      items: [
        { name: 'Essay Writing', path: '/services/essay-writing' },
        { name: 'Research Papers', path: '/services/research-papers' },
        { name: 'Thesis/Dissertation', path: '/services/thesis-dissertation' },
        { name: 'Case Studies', path: '/services/case-studies' },
        { name: 'Literature Reviews', path: '/services/literature-reviews' }
      ]
    },
    {
      title: 'Homework Help',
      items: [
        { name: 'Math Problems', path: '/services/math-problems' },
        { name: 'Science Assignments', path: '/services/science-assignments' },
        { name: 'Programming Help', path: '/services/programming-help' },
        { name: 'Engineering', path: '/services/engineering-help' },
        { name: 'Business Studies', path: '/services/business-studies' }
      ]
    },
    {
      title: 'Editing & Proofreading',
      items: [
        { name: 'Grammar Check', path: '/services/grammar-check' },
        { name: 'Plagiarism Removal', path: '/services/plagiarism-removal' },
        { name: 'Formatting', path: '/services/formatting' },
        { name: 'Citation Help', path: '/services/citation-help' }
      ]
    }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          AceHomework
        </Link>
        
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          {academicCategories.map((category, index) => (
            <li 
              className="nav-item" 
              key={index}
              onMouseEnter={!isMobile ? () => toggleDropdown(index) : undefined}
              onMouseLeave={!isMobile ? () => toggleDropdown(null) : undefined}
              onClick={isMobile ? () => toggleDropdown(index) : undefined}
            >
              <div className="nav-links">
                {category.title} {isMobile ? (
                  dropdown === index ? <FaCaretDown style={{ transform: 'rotate(180deg)' }} /> : <FaCaretDown />
                ) : <FaCaretDown />}
              </div>
              <ul className={dropdown === index ? 'dropdown-menu active' : 'dropdown-menu'}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="dropdown-link"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;