import React, { useState, useEffect } from "react";
import Travelcard from "./Travelcard";

const Travel = () => {
  const [travel, setTravel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTravel= async () => {
      try {
        const response = await fetch("http://localhost:3000/travelPackages");
        const data = await response.json();
        setTravel(data)
        setLoading(false)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTravel();
  }, []);

  return (
    <div>
       <h1 className="text-3xl font-bold text-center mb-5">Travel Package</h1>
      <ul>
        <div className="grid grid-cols-3  " >
          
        {travel.map((data) => (
          <div key={data.id}>
            
         
            <Travelcard props={data} />
            
          </div>
          
        ))}
        </div>
      </ul>
    </div>
  );
};

export default Travel;




