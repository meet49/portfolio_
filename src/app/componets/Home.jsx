"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const professions = ["Frontend Developer", "Freelancer", "Computer Engineer"];

const Home = () => {
  const [currentProfession, setCurrentProfession] = useState(professions[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % professions.length);
      setCharIndex(0);
    }, 3000); // Change interval to 3 seconds per profession
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentProfession(professions[index]);
    setDisplayedText("");
  }, [index]);

  useEffect(() => {
    if (charIndex < currentProfession.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentProfession[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentProfession]);

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex items-center space-x-8 ">
        <Image src="/2.jpg" alt="Profile" className="rounded-full w-64 h-64" width={200} height={200} />
        <div>
          <h1 className="text-5xl font-extrabold mb-4 ">
            Hello, I'm <span className="text-blue-500">Meet Sojitra</span>
          </h1>
          <p className="text-2xl text-gray-300">{displayedText}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
