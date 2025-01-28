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
  const [message, setMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
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

  const [qrCodeScreenshot, setQrCodeScreenshot] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      setIsPaymentOpen(true);
    } else {
      setFormValid(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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

  const validatePayment = () => {
    if (paymentMethod === 'qr' && !qrCodeScreenshot) {
      alert('Please upload a valid screenshot of the QR code!');
      return false;
    }

    if (paymentMethod === 'card') {
      const { cardholderName, cardNumber, expiryDate, cvv } = formData;
      if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill all card details!');
        return false;
      }
      if (cardNumber.length !== 16) {
        alert('Card number should be 16 digits!');
        return false;
      }
      if (cvv.length !== 3) {
        alert('CVV should be 3 digits!');
        return false;
      }
      return true;
    }

    if (paymentMethod === 'call') {
      setOtpSent(true);
      return false;
    }

    return true;
  };

  const handleOtpVerification = () => {
    if (otp === '1234') {
      setPaymentConfirmed(true);
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  };

  const resetPaymentSections = () => {
    setOtpSent(false);
    setOtp('');
    setPaymentConfirmed(false);
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
                    validatePayment();
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
                onClick={() => {
                  setPaymentMethod('qr');
                  resetPaymentSections(); // Reset payment sections when changing method
                }}
              >
                Pay via QR Code
              </button>
              <button
                className={`payment-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => {
                  setPaymentMethod('card');
                  resetPaymentSections();
                }}
              >
                Pay via Card
              </button>
              <button
                className={`payment-btn ${paymentMethod === 'call' ? 'active' : ''}`}
                onClick={() => {
                  setPaymentMethod('call');
                  resetPaymentSections();
                }}
              >
                Pay via Call
              </button>
            </div>

            {paymentMethod === 'qr' && (
              <div className="qr-section fade-in">
                <p>Scan the QR Code to proceed with payment:</p>
                <img src="path/to/your-qr-code-image.png" alt="QR Code" style={{ width: 200, height: 200 }} />
                <p>Upload a screenshot of the scanned QR code for confirmation:</p>
                <input type="file" accept="image/*" onChange={handleQrCodeScreenshotUpload} />
                {qrCodeScreenshot && (
                  <div className="image-upload-container" style={{ marginTop: '10px' }}>
                    <img src={qrCodeScreenshot} alt="Scanned QR Screenshot" style={{ width: 200, height: 200 }} />
                    <div style={{ marginTop: '10px' }}>
                      <button
                        className="upload-btn" // Apply the upload button class here
                        onClick={() => {
                          // Set the confirmation message
                          setMessage(`Hello ${formData.name}, we got your request for booking. Our team will contact you shortly.`);
                        }}
                      >
                        Upload
                      </button>
                    </div>
                    {message && <p style={{ marginTop: '10px' }}>{message}</p>} {/* Display the message below the button */}
                  </div>
                )}
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="card-section fade-in">
                <p>Enter your card details:</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault(); // Prevent the default form submission

                    // Validation
                    const { cardholderName, cardNumber, expiryDate, cvv } = formData;
                    const currentDate = new Date();
                    const [expiryMonth, expiryYear] = expiryDate.split('/').map(Number);
                    const expiryFullYear = 2000 + expiryYear; // Assuming YY is in the 2000s

                    // Check if cardholder name is empty or contains invalid characters
                    if (!cardholderName || !/^[a-zA-Z\s-]+$/.test(cardholderName)) {
                      alert('Cardholder Name is required and can only contain letters, spaces, and hyphens.');
                      return;
                    }

                    // Check if card number is valid
                    if (!/^\d{16}$/.test(cardNumber)) {
                      alert('Card Number must be 16 digits.');
                      return;
                    }

                    // Check if expiry date is valid
                    if (!expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/) ||
                      (expiryFullYear < currentDate.getFullYear() ||
                        (expiryFullYear === currentDate.getFullYear() && expiryMonth < currentDate.getMonth() + 1))) {
                      alert('Expiry Date is invalid or has already passed.');
                      return;
                    }

                    // Check if CVV is valid
                    if (!/^\d{3}$/.test(cvv)) {
                      alert('CVV must be 3 digits.');
                      return;
                    }

                    // If all validations pass, set the confirmation message
                    setConfirmationMessage(`Hello ${formData.name}, we got your request for booking. Our team will contact you shortly.`);
                  }}
                >
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
                {confirmationMessage && <p style={{ marginTop: '10px', textAlign: 'center' }}>{confirmationMessage}</p>} {/* Display the message below the button */}
              </div>
            )}

            {paymentMethod === 'call' && !otpSent && (
              <div className="call-section fade-in">
                <p>Enter your phone number to receive an OTP:</p>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="payment-btn"
                  onClick={() => setOtpSent(true)}
                >
                  Send OTP
                </button>
              </div>
            )}

            {otpSent && (
              <div className="otp-section fade-in">
                <p>Enter the OTP sent to your phone:</p>
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength="4"
                  required
                />
                <button
                  type="button"
                  className="confirm-btn"
                  onClick={handleOtpVerification}
                >
                  Verify OTP
                </button>
              </div>
            )}

            {paymentConfirmed && (
              <div className="confirmation-message fade-in">
                <p>Hello {formData.name}, we got your request for booking. Our team will contact you shortly.</p>
              </div>
            )}

            <button
              className="close-btn"
              onClick={() => {
                setIsPaymentOpen(false);
                setIsModalOpen(false);
                setPaymentConfirmed(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
