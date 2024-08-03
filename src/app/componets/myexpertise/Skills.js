import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass } from 'react-icons/fa'
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="px-6 pb-20 mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center"> Skills</h2>
      <h3 className="text-2xl font-semibold mb-4 text-center">Web Development</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <FaHtml5 className="text-8xl text-orange-600 drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <FaCss3Alt className="text-8xl text-blue-600 drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <FaJsSquare className="text-8xl text-yellow-500 drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <SiTypescript className="text-8xl text-blue-500 drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <FaReact className="text-8xl text-blue-400 drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <SiRedux className="text-8xl text-purple-600 drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <SiNextdotjs className="text-8xl text-gray-800 drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <SiTailwindcss className="text-8xl text-blue-400 drop-shadow-lg" />
        </div>
        <div className="flex justify-center items-center transition transform hover:scale-110">
          <FaSass className="text-8xl text-pink-400 drop-shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default Skills
