import React, { useState, useEffect } from "react";
import Destinationcards from "./Destinationcard";

const Destination = () => {
  const [destination, setDestination] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const images = [
    "https://cdn.getyourguide.com/img/tour/f640d191612acc27929ccdb076899e26a5cba46f4a1298f13aebf8674c89ad0d.jpg/145.jpg",
    
    "https://www.planetware.com/wpimages/2019/12/nepal-in-pictures-beautiful-places-to-photograph-annapurna-range.jpg",
    "https://nepaltraveller.com/images/main/1602412856.sidetrackimagephotohraphy.jpg",
    "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/10/nepal_pokhara-fewa-lake-boats.jpg",
    "https://www.planetware.com/wpimages/2019/12/nepal-in-pictures-beautiful-places-to-photograph-pokhara.jpg"
  ];

  function ImageSlider() {
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

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch("http://localhost:3000/topDestinations");
        const data = await response.json();
        setDestination(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchDestination();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-5">Destination</h1>
      <ImageSlider />
      <ul>
        <div className="grid grid-cols-3">
          {destination.map((data) => (
            <div key={data.id}>
              <Destinationcards props={data} />
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Destination;
