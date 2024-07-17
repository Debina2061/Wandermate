import React from "react";
import { useState } from "react";

const Sign = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (

     <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
     <h1 className="text-2xl font-bold text-blue-600 mb-4">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <label> Username</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        </div>
        <br />
        <div className="mb-4">
        <label> Password</label>
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        </div>
        <br />
        <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default Sign;
