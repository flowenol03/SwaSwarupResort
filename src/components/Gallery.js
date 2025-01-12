import React, { forwardRef } from 'react';

const Gallery = forwardRef((props, ref) => {
  const galleryImages = [
    'image/gallery1.jpg', // Update these image paths with your actual images
    'image/gallery2.jpg',
    'image/gallery3.jpg',
    'image/gallery4.jpg',
    'image/gallery5.jpg',
    'image/gallery6.jpg',
    'image/gallery7.jpg',
    'image/gallery8.jpg',
  ];

  return (
    <section
      id="gallery"
      ref={ref}
      style={{
        backgroundColor: '#1d1d1d',
        padding: '60px 20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontFamily: 'Garamond, serif',
          color: '#FFD700',
          marginBottom: '30px',
        }}
      >
        Our Exclusive Gallery
      </h2>
      <p
        style={{
          fontSize: '1.25rem',
          fontFamily: 'Georgia, serif',
          color: '#fff',
          marginBottom: '50px',
        }}
      >
        Explore our stunning visuals and luxurious spaces, where elegance meets comfort.
      </p>

      <div
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.3s ease-in-out',
              height: '350px',  // Further increased height
            }}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`} // Avoid using redundant words
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
            />
            <div
              className="overlay"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                opacity: '0',
                transition: 'opacity 0.3s ease',
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Gallery;
