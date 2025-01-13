import React, { useState } from 'react';

const Header = ({
  scrollToHome,
  scrollToAboutUs,
  scrollToMenu,
  scrollToServices,
  scrollToGallery,
  scrollToContact,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnClick = () => {
    setIsMenuOpen(false); // Close the menu when any item is clicked
  };

  return (
    <header>
      <div className="container">
        {/* Resort Name */}
        <div className="resort-name">SwarSwarup Resort</div>

        {/* Navigation Menu */}
        <nav>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHome();
                  closeMenuOnClick();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAboutUs();
                  closeMenuOnClick();
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToMenu();
                  closeMenuOnClick();
                }}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToServices();
                  closeMenuOnClick();
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToGallery();
                  closeMenuOnClick();
                }}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                  closeMenuOnClick();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
