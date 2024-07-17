// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border border-neutral-800/90">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                <Link to ="/"> <span className="text-xl tracking-loose text-black-500 text-4xl font-bold">EXPLORE.</span></Link>
                </div>
                <ul className="flex ml-14 space-x-12 text-xl">
                <li><Link to ="/">About</Link></li>
                    <li><Link to ="/hotel">Hotels</Link></li>
                    <li><Link to ="/Destination">Destination</Link></li>
                    <li><Link to ="/travel">Travel Package</Link></li>
                </ul>
                <div className="flex justify-center space-x-4 items-center">
                    <span className="text-xl">debina123</span>
                    <Link to="/" className="flex items-center justify-center">
                        <img src={"https://i.pinimg.com/564x/df/00/8e/df008e504481bf1b92305e6f68d4d92e.jpg"} alt="User Avatar" className="h-9 w-9 rounded-full" />
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;