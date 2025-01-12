import React from 'react';

const Hero = ({ scrollToAboutUs }) => {
  return (
    <section id="hero" className="hero">
      <h1>Welcome to SwaSwarup Resort</h1>
      <p>Experience luxury redefined.</p>
      <button className="explore-btn" onClick={scrollToAboutUs}>
        Explore More
      </button>
    </section>
  );
};

export default Hero;
