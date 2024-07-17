import React, { useState, useEffect } from "react";
import Hotelcards from "./Hotelcard";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotels");
        const data = await response.json();
        setHotels(data)
        setLoading(false)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  return (
    <div>
      <h1>Hotels</h1>
      <ul>
        <div className="grid grid-cols-3">
        {hotels.map((data) => (
          <div key={data.id}>
         
            <Hotelcards props={data} />
          </div>
          
        ))}
        </div>
      </ul>
    </div>
  );
};

export default Hotel;