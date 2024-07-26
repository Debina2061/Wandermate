import React from "react";
import Nav from "./Nav";
import Signin from "./Signin";
import Signup from "./Signup";
function Landing() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          marginTop: "0rem",
        }}
      >
        <div style={{ marginTop: "10rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            The Country of Himalayas
          </h2>
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "bold",
              color: "orange",
              marginBottom: "1rem",
            }}
          >
            NEPAL
          </h1>
          <p style={{ fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
            Visit Nepal, You will never regret it. <br />
            This is something incredible, fantastic, mesmerizing and lifetime
            experience.
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing;
