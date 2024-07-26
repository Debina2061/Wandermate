import React from "react";
import TopHotels from "./TopHotels"; // Make sure the path is correct based on your file structure
import TopDestination from "./TopDestination";
import TopTravel from "./TopTravel";

function About() {
  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem'
  };

  const searchBoxStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '400px'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px 20px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '25px',
    color:'black',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    outline: 'none'
  };

  const searchButtonStyle = {
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    outline: 'none'
  };

  const imageContainerStyle = {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    height: '500px', // Set a specific height
    overflow: 'hidden'
  };

  const overlayTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
  };

  const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    textAlign: 'center',
    marginTop: '2rem'
  };

  const listContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const listStyleLeft = {
    listStyleType: 'none',
    textAlign: 'left'
  };

  const listStyleCenter = {
    listStyleType: 'none',
    textAlign: 'center'
  };

  const listStyleRight = {
    listStyleType: 'none',
    textAlign: 'right'
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Explore Boudha</h2>
        <div style={imageContainerStyle}>
          <img src="https://cdn.getyourguide.com/img/tour/f640d191612acc27929ccdb076899e26a5cba46f4a1298f13aebf8674c89ad0d.jpg/145.jpg" alt="Boudha" style={{ width: '100%', height: 'auto' }} />
          <div style={overlayTextStyle}>
            <h1>The Country of Himalayas</h1>
            <div style={searchContainerStyle}>
              <div style={searchBoxStyle}>
                <input
                  type="text"
                  style={inputStyle}
                  placeholder="Search Your Place, Destination......"
                />
                <button style={searchButtonStyle}>🔍</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TopHotels />
      <TopDestination />
      <TopTravel />

      <footer style={footerStyle}>
        <div style={listContainerStyle}>
          <ul style={listStyleLeft}>
            <h2>About WanderMate</h2>
            <li>About us</li>
            <li>Home</li>
            <li>Destination</li>
            <li>Tours</li>
            <li>Hotels</li>
          </ul>
          <ul style={listStyleCenter}>
            <h2>Explore</h2>
            <li>Flights</li>
            <li>Car Rentals</li>
            <li>Activities</li>
            <li>Deals</li>
          </ul>
          <ul style={listStyleRight}>
            <h2>Trip-Advisor Sites</h2>
            <li>Contact us</li>
            <li>Terms of Services</li>
            <li>Privacy policies</li>
            <li>Terms of Condition</li>
          </ul>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p>&copy; 2024 WanderMate LLC. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default About;
