import React, { useState, useEffect } from "react";
import Hotelcards from "./Hotelcard";
import { useParams } from "react-router-dom";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotels");
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Hotels</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {hotels.map((data) => (
          <div key={data.id} style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
            <Hotelcards props={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
