"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          Meet Sojitra
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#myexpertise" className="hover:underline">My Expertise</a>
          <a href="#contactus" className="hover:underline">Contact Us</a>
        </div>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
            <div className="w-6 h-0.5 bg-white transition-transform duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-opacity duration-300 mt-1.5"></div>
            <div className="w-6 h-0.5 bg-white transition-transform duration-300 mt-1.5"></div>
          </div>
        </div>
      </div>
      <div className={`md:hidden mt-4 space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="block hover:underline">Home</a>
        <a href="#services" className="block hover:underline">Services</a>
        <a href="#myexpertise" className="block hover:underline">My Expertise</a>
        <a href="#contactus" className="block hover:underline">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
