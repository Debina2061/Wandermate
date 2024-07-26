import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav";

const Hotelcards = ({ props }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={{ width: "100%", padding: "16px" }}>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          style={{ width: "50%", height: "300px", objectFit: "cover" }}
          src={props.img}
          alt={props.name}
        />
        <div style={{ padding: "16px", width: "50%" }}>
          <h1
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            {props.name}
          </h1>
          <div style={{ marginTop: "8px" }}>
            <p>✔ Free Cancellation</p>
            <p>✔ Reserve now, pay at stay</p>
            <Link to={`/hotel/${props.id}`}>
              <button style={{ marginTop: "8px", alignSelf: "flex-end" }}>
                View Deal
              </button>
            </Link>
          </div>
          <div
            style={{ marginTop: "16px", display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                fontSize: "1.125rem",
                color: "#DD6B20",
                fontWeight: "bold",
              }}
            >
              Rs {props.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotelcards;
