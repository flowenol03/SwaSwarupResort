import React, { useRef } from 'react';
import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const menuSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header
        scrollToHome={() => scrollToSection(heroSectionRef)}
        scrollToAboutUs={() => scrollToSection(aboutSectionRef)}
        scrollToMenu={() => scrollToSection(menuSectionRef)}
        scrollToServices={() => scrollToSection(servicesSectionRef)}
        scrollToGallery={() => scrollToSection(gallerySectionRef)}
        scrollToContact={() => scrollToSection(contactSectionRef)}
      />
      <div ref={heroSectionRef}>
        <Hero scrollToAboutUs={() => scrollToSection(aboutSectionRef)} />
      </div>
      <About ref={aboutSectionRef} />
      <Menu ref={menuSectionRef} />
      <Services ref={servicesSectionRef} />
      <Gallery ref={gallerySectionRef} />
      <Contact ref={contactSectionRef} />
      <Footer />
    </div>
  );
};

export default App;
