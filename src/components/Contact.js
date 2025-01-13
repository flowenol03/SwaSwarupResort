import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section
      id="contact"
      ref={ref}
      style={{
        backgroundColor: '#1d1d1d',
        padding: '60px 20px',
        color: '#fff',
        textAlign: 'center',
        borderTop: '5px solid #FFD700', // Luxurious golden border
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
        Contact Us
      </h2>
      <p
        style={{
          fontSize: '1.25rem',
          fontFamily: 'Georgia, serif',
          color: '#fff',
          marginBottom: '50px',
        }}
      >
        Reach out for bookings, inquiries, or any other queries. Our team is here to assist you.
      </p>

      <div
        className="contact-info"
        style={{
          marginBottom: '50px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <p
          style={{
            fontSize: '1.25rem',
            color: '#fff',
            marginBottom: '20px',
          }}
        >
          <strong>Email:</strong>{' '}
          <a
            href="mailto:swaswarupresort@gmail.com"
            style={{
              color: '#FFD700',
              textDecoration: 'none',
            }}
          >
            swarswarupresort@gmail.com
          </a>
        </p>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#fff',
            marginBottom: '20px',
          }}
        >
          <strong>Phone:</strong> +91 9673794227
        </p>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#fff',
          }}
        >
          <strong>Address:</strong> SwarSwarupResort, Anuskura.
        </p>
      </div>

      <div
        className="contact-form"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#333',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            fontSize: '1.1rem',
            borderRadius: '5px',
            border: '1px solid #FFD700',
            backgroundColor: '#333',
            color: '#fff',
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            fontSize: '1.1rem',
            borderRadius: '5px',
            border: '1px solid #FFD700',
            backgroundColor: '#333',
            color: '#fff',
          }}
        />
        <textarea
          placeholder="Your Message"
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '30px',
            fontSize: '1.1rem',
            borderRadius: '5px',
            border: '1px solid #FFD700',
            backgroundColor: '#333',
            color: '#fff',
            height: '150px',
            resize: 'none',
          }}
        ></textarea>
        <button
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            color: '#fff',
            backgroundColor: '#FFD700',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#ffcc00')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#FFD700')}
        >
          Submit
        </button>
      </div>
    </section>
  );
});

export default Contact;
