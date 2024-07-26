import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Booking from './Booking';
import Users from './Users';
import travels from './Travels';
import Hotels from './Hotels';
import Review from './Review';
import Travels from './Travels';


const Dashboard = () => {
  return (
    <div className="flex min-h-screen ">
      <SideBar />
      <div>
        <Path />
      </div>
    </div>
  );
};

export default Dashboard;

const Path = () => {
  return ( 
    <Routes>
      <Route path="users" element={<Users />} />
      <Route path="travels" element={<Travels/>} />
      <Route path="hotels" element={<Hotels />} />
      <Route path="bookings" element={<Booking />} />
      <Route path="reviews" element={<Review />} />
    </Routes>
  );
};

const SideBar = () => {
  return (
    <div className="w-64 bg-gray-400 shadow-2xl">
      <ul className="space-y-2">
        <li>
          <Link to="users" className="block py-2 px-4 text-black-700 hover:bg-gray-200">Users</Link>
        </li>
        <li>
          <Link to="travels" className="block py-2 px-4 text-black-700 hover:bg-gray-200">Travel Packages</Link>
        </li>
        <li>
          <Link to="hotels" className="block py-2 px-4 text-black-700 hover:bg-gray-200">Hotels</Link>
        </li>
        <li>
          <Link to="bookings" className="block py-2 px-4 text-black-700 hover:bg-gray-200">Booking</Link>
        </li>
        <li>
          <Link to="reviews" className="block py-2 px-4 text-black-700 hover:bg-gray-200">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};