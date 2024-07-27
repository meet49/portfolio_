"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    }, 3000); 
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
    <div className="flex h-screen items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/2.jpg"
            alt="Profile"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
            width={320}
            height={320}
          />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            {`Hello, I'm`} <span className="text-blue-500">Meet Sojitra</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">{displayedText}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
