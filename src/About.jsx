import React from "react";
import TopHotels from "./TopHotels"; // Make sure the path is correct based on your file structure
import TopDestination from "./TopDestination";
import ImageSlider from "./Imageslider";

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
    width: '120%',
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
    right: '-30px',
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
    </>
  );
}

export default About;
