import React from "react";
import ReactDOM from "react-dom";

function TopDestination() {
  const destination = [
    {
      name: "Hotel Annapurna",
      price: "$100",
      image: "https://assets-cdn.kathmandupost.com/uploads/source/news/2020/money/annapurnahotel-1608561353.jpg"
    },
    {
      name: "Hotel Everest",
      price: "$150",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA0DVpVZY4V3xxICGjIvi5BFMVxFox5cSqg&s"
    },
    {
      name: "Hotel Himalaya",
      price: "$200",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/421831233.jpg?k=78626bb803ddd72db5e6c8dc9c8c28d399d1f3bc2a56ed9795ce51372e7246fb&o=&hp=1"
    },
    {
      name: "Hotel Sherpa",
      price: "$120",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpci6dbzB7a9uFck5LNDl1Hfx9_awmeS7w_g&s"
    }
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '2rem',
    padding: '0 1rem'
  };

  const cardStyle = {
    position: 'relative',
    width: 'calc(50% - 0.5rem)',
    margin: '0.5rem 0',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    backgroundColor: 'white'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const contentStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: 'white',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
  };

  const priceStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    color: 'white',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
  };

  const heartIconStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontSize: '24px',
    color: 'white',
    cursor: 'pointer'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px'
  };

  const headerImageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px'
  };

  const headerTextStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={headerStyle}>
        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/3d23c3201281021.Y3JvcCwyNTAwLDE5NTUsMCw2NDM.jpg" alt="Top Destination" style={headerImageStyle} />
        <span style={headerTextStyle}>Top Destination</span>
      </div>
      <div>
        <div style={containerStyle}>
          {destination.map((destination, index) => (
            <div key={index} style={cardStyle}>
              <img src={destination.image} alt={destination.name} style={imageStyle} />
              <div style={heartIconStyle}>♡</div>
              <div style={contentStyle}>
                <h3>{destination.name}</h3>
              </div>
              <div style={priceStyle}>
                <h3>{destination.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default TopDestination;
