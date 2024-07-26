"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className="bg-transparent text-white p-4 xl:px-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="about" className="hover:underline">
            About{" "}
          </Link>
        </div>
        <div className="text-xl font-bold">Meet Sojitra</div>
        <div className="hidden md:flex space-x-6">
          <Link href="projects" className="hover:underline">
            Projects
          </Link>
          <Link href="myexpertise" className="hover:underline">
            My experience 
          </Link>
          <Link href="contactus" className="hover:underline">
            Contact Us
          </Link>
        </div>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <div className={`menu-icon ${isOpen ? "open" : ""}`}>
            <div className="w-6 h-0.5 bg-white transition-transform duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-opacity duration-300 mt-1.5"></div>
            <div className="w-6 h-0.5 bg-white transition-transform duration-300 mt-1.5"></div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden mt-4 space-y-4 ${isOpen ? "block" : "hidden"}`}
      >
        <Link href="/" className="block hover:underline">
          Home
        </Link>
        <Link href="about" className="block hover:underline">
        About
        </Link>
        <Link href="projects" className="block hover:underline">
        Projects
        </Link>
        <Link href="myexpertise" className="block hover:underline">
        My experience
        </Link>
        <Link href="contactus" className="block hover:underline">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
