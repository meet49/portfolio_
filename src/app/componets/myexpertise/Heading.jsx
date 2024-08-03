"use client";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Heading = () => {
  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="relative text-center bg-cover bg-center h-screen lazyload"
      style={{ backgroundImage: 'url("/myexpertise.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-[90%] flex flex-col gap-16 items-center justify-center">
        <h1 className="text-6xl font-bold text-white z-10">
          My <span className="text-blue-500">Experience</span>
        </h1>
        <Link href="#experience" passHref>
          <FaChevronDown
            className="w-10 h-10 text-white cursor-pointer animate-bounce z-10"
            onClick={(e) => handleScroll(e, "experience")}
          />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
