import React, { useRef, useState } from 'react';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [formValid, setFormValid] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    numberOfPersons: '',
    numberOfRooms: '',
    stayDurationStart: '',
    stayDurationEnd: '',
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [qrCodeScreenshot, setQrCodeScreenshot] = useState(null); // State for the screenshot

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Validate form before opening payment modal
  const validateForm = () => {
    const { name, phoneNumber, numberOfPersons, numberOfRooms, stayDurationStart, stayDurationEnd } = formData;
    if (
      name &&
      phoneNumber &&
      numberOfPersons &&
      numberOfRooms &&
      stayDurationStart &&
      stayDurationEnd
    ) {
      setFormValid(true);
      setIsPaymentOpen(true); // Open the payment modal if the form is valid
    } else {
      setFormValid(false); // Set form as invalid if any field is missing
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file upload for QR code screenshot (confirmation)
  const handleQrCodeScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQrCodeScreenshot(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Validate payment form (QR Code or Card)
  const validatePayment = () => {
    if (paymentMethod === 'qr' && !qrCodeScreenshot) {
      alert('Please upload a valid screenshot of the QR code!');
      return false;
    }

    if (paymentMethod === 'card') {
      const { cardholderName, cardNumber, expiryDate, cvv } = formData;

      // Validate if all fields are filled
      if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill all card details!');
        return false;
      }

      // Example additional validation (e.g., card number length, expiry date format, etc.)
      if (cardNumber.length !== 16) {
        alert('Card number should be 16 digits!');
        return false;
      }

      if (cvv.length !== 3) {
        alert('CVV should be 3 digits!');
        return false;
      }

      return true; // If all validations pass
    }

    return true; // For other payment methods (like QR)
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

      <button className="book-now-btn" onClick={() => setIsModalOpen(true)}>
        BOOK NOW
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="booking-modal">
            <h2>Book Your Stay</h2>
            <form>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <label>Number of Persons:</label>
              <input
                type="number"
                name="numberOfPersons"
                placeholder="Enter number of persons"
                value={formData.numberOfPersons}
                onChange={handleInputChange}
                required
              />
              <label>Number of Rooms:</label>
              <input
                type="number"
                name="numberOfRooms"
                placeholder="Enter number of rooms"
                value={formData.numberOfRooms}
                onChange={handleInputChange}
                required
              />
              <label>Stay Duration:</label>
              <input
                type="date"
                name="stayDurationStart"
                value={formData.stayDurationStart}
                onChange={handleInputChange}
                required
              />
              to
              <input
                type="date"
                name="stayDurationEnd"
                value={formData.stayDurationEnd}
                onChange={handleInputChange}
                required
              />

              <button
                type="button"
                className="payment-btn"
                onClick={() => {
                  if (validateForm()) {
                    validatePayment(); // Validate payment before opening the modal
                  }
                }}
              >
                Make Payment
              </button>

              {!formValid && <p className="error-message">Please fill all fields before proceeding.</p>}
            </form>

            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {isPaymentOpen && (
        <div className="modal-overlay">
          <div className="payment-modal">
            <h2>Select Payment Method</h2>

            <div className="payment-options">
              <button
                className={`payment-btn ${paymentMethod === 'qr' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('qr')}
              >
                Pay via QR Code
              </button>
              <button
                className={`payment-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                Pay via Card
              </button>
            </div>

            {paymentMethod === 'qr' && (
              <div className="qr-section fade-in">
                <p>Scan the QR Code to proceed with payment:</p>

                {/* Display your own QR code image here */}
                <img src="path/to/your-qr-code-image.png" alt="QR Code" style={{ width: 200, height: 200 }} />

                {/* Screenshot upload */}
                <p>Upload a screenshot of the scanned QR code for confirmation:</p>
                <input type="file" accept="image/*" onChange={handleQrCodeScreenshotUpload} />
                {qrCodeScreenshot && <img src={qrCodeScreenshot} alt="Scanned QR Screenshot" style={{ width: 200, height: 200 }} />}
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="card-section fade-in">
                <p>Enter your card details:</p>
                <form>
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="John Doe"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength="16"
                    required
                  />
                  <div className="card-row">
                    <div>
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label>CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="confirm-btn">Confirm Payment</button>
                </form>
              </div>
            )}

            <button className="close-btn" onClick={() => setIsPaymentOpen(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
