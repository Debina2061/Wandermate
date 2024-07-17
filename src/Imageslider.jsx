import React, { useState, useEffect } from "react";

function ImageSlider() {
  const images = [
    "https://cdn.getyourguide.com/img/tour/f640d191612acc27929ccdb076899e26a5cba46f4a1298f13aebf8674c89ad0d.jpg/145.jpg",
    "https://assets-cdn.kathmandupost.com/uploads/source/news/2020/money/annapurnahotel-1608561353.jpg",
    "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/money/hoteleverest-1608561353.jpg",
    "https://assets-cdn.kathmandupost.com/uploads/source/news/2022/money/hotelhimalaya-1608561353.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const sliderContainerStyle = {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    overflow: 'hidden',
    height: '500px'
  };

  const sliderImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 1s ease-in-out'
  };

  const sliderButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 10
  };

  const prevButtonStyle = {
    ...sliderButtonStyle,
    left: '10px'
  };

  const nextButtonStyle = {
    ...sliderButtonStyle,
    right: '10px'
  };

  return (
    <div style={sliderContainerStyle}>
      <button style={prevButtonStyle} onClick={handlePrevClick}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt="Slide" style={sliderImageStyle} />
      <button style={nextButtonStyle} onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;
