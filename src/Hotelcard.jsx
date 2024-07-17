import React from "react";
import Navbar from "./Nav";
export default function Hotelcards({ props }) {
  console.log(props);
  <Navbar/>
  return (
    
    <div className="w-full sm:w-5/3 md:w-5/3 lg:w-5/3 xl:w-5/3 p-4">
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full h-[300px] object-cover" src={props.img} alt={props.name} />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{props.name}</h1>
        <p className="text-gray-700">{props.desc.slice(0, 250)}...</p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-lg text-orange-600 font-bold">Rs {props.price}</div>
          <div className="flex items-center">
            <div className="text-sm font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
              {props.rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )}