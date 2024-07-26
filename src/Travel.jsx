import React, { useState, useEffect } from "react";
import Travelcard from "./Travelcard";
import { useParams } from "react-router-dom";

const Travel = () => {
  const [travel, setTravel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTravel = async () => {
      try {
        const response = await fetch("http://localhost:3000/travelPackages");
        const data = await response.json();
        setTravel(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTravel();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
    
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {travel.map((data) => (
          <div key={data.id} style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
            <Travelcard props={data} />
          </div>
        ))}
      </div>
      
    </div>
    
  );
};


export default Travel;
