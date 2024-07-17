import React from "react";

function TopDestination() {
  const hotels = [
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
    justifyContent: 'space-around',
    marginTop: '9rem'
  };

  const cardStyle = {
    position: 'relative',
    width: 'calc(50% - 1rem)',
    margin:  '1 rem',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto'
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

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '1rem 0', color:'black'}}>Top Destination</h2>
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
  );
}

export default TopDestination;
