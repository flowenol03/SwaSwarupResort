import React, { forwardRef, useState } from 'react';

const About = forwardRef((props, ref) => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle active box
  };

  const features = [
    {
      title: 'Exquisite Accommodations',
      description:
        'Each room and suite is designed with plush furnishings, breathtaking views, and world-class amenities to ensure the highest standard of comfort.',
      imageUrl: '/image/accommodation.jpg', // Path to image for this feature
    },
    {
      title: 'Culinary Excellence',
      description:
        'Indulge in a variety of gastronomical delights at our fine dining restaurants, offering cuisines from around the world, prepared by our renowned chefs.',
      imageUrl: '/image/culinary.jpg', // Path to image for this feature
    },
    {
      title: 'State-of-the-Art Facilities',
      description:
        'Relax at our infinity pool, rejuvenate at our luxurious spa, or stay active in our well-equipped fitness center.',
      imageUrl: '/image/facilities.jpg', // Path to image for this feature
    },
    {
      title: 'Unmatched Experiences',
      description:
        'Enjoy curated experiences like private beach dinners, nature walks, adventure activities, and cultural performances.',
      imageUrl: '/image/experiences.jpg', // Path to image for this feature
    },
    {
      title: 'Sustainable Luxury',
      description:
        'We are committed to eco-friendly practices, ensuring that your stay contributes positively to the environment.',
      imageUrl: '/image/sustainability.jpg', // Path to image for this feature
    },
  ];

  return (
    <section id="about" ref={ref} className="about">
      <div className="about-overlay">
        <h2>About Us</h2>
        <p>
          Welcome to SwarSwarup Resort – Where Luxury Meets Tranquility
        </p>
        <p>
          Nestled amidst serene landscapes and designed to redefine opulence,
          SwaSwarup Resort is a five-star haven for those who seek the perfect
          blend of comfort, elegance, and exclusivity.
        </p>
        <p>
          Our resort boasts a unique architectural style that harmoniously
          integrates modern design with timeless luxury.
        </p>
      </div>

      <div className="about-boxes">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`about-box ${activeBox === index ? 'active' : ''} ${feature.title === 'Sustainable Luxury' ? 'small-width' : ''}`}
            onClick={() => handleBoxClick(index)}
          >
            <div
              className="box-image"
              style={{ backgroundImage: `url(${feature.imageUrl})` }}
            >
              <h3>{feature.title}</h3>
            </div>
            <div className="box-content">
              <p>{activeBox === index ? feature.description : ''}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default About;
