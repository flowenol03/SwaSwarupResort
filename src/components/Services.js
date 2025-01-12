import React, { forwardRef } from 'react';

const servicesData = [
  {
    name: 'Infinity Swimming Pool',
    description:
      'Dive into pure bliss with our infinity-edge pool that seamlessly blends into the horizon. Surrounded by lush landscapes, enjoy refreshing swims or relax on the sun-drenched deck with views that stretch as far as the eye can see.',
    image: 'image/pool.jpg', // Add image path for the pool
  },
  {
    name: 'Luxury Rooms & Suites',
    description:
      'Experience unparalleled comfort in our exquisitely designed rooms and suites. Each space is a sanctuary, featuring modern amenities, plush furnishings, and panoramic views. Whether you\'re enjoying a peaceful retreat or entertaining guests, our rooms offer the perfect setting for every occasion.',
    image: 'image/room.jpg', // Add image path for the room
  },
];

const Services = forwardRef((props, ref) => {
  return (
    <section id="services" ref={ref} style={{ backgroundColor: '#f8f8f8', padding: '60px 20px', color: '#333', textAlign: 'center' }}>
      <h2 style={{ fontSize: '3rem', fontFamily: 'Garamond, serif', color: '#FFD700', marginBottom: '30px' }}>
        Our Exclusive Services
      </h2>
      <p style={{ fontSize: '1.25rem', fontFamily: 'Georgia, serif', color: '#333', marginBottom: '50px' }}>
        Indulge in a world of elegance and relaxation with our exclusive services, meticulously crafted to provide you with an unforgettable experience.
      </p>

      <div className="services-list" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service-item"
            style={{
              width: '45%',
              marginBottom: '40px',
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <img
              src={service.image}
              alt={service.name}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            />
            <h3 style={{ fontSize: '2rem', fontFamily: 'Garamond, serif', color: '#FFD700', marginBottom: '20px' }}>
              {service.name}
            </h3>
            <p style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif', color: '#555', lineHeight: '1.5' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Services;
