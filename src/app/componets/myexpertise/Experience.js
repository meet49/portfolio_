import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="px-6 pb-20 mt-16 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      
      <div className="relative border-l-4 border-blue-500">
        <div className="mb-8 pl-8 relative">
          <div className="absolute -left-4 -top-1 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">1</div>
          <h3 className="text-xl font-semibold">07/2023 - 08/2023</h3>
          <h4 className="text-lg font-medium">STYPIX</h4>
          <p className="italic mb-2">React JS Developer Intern</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              During my summer internship at STYPIX, I had the privilege of serving as a React Intern, contributing to the development of cutting-edge web applications.
            </li>
            <li>
              This experience allowed me to immerse myself in the world of frontend development and enhance my skills in React.js.
            </li>
          </ul>
        </div>
        
        <div className="mb-8 pl-8 relative">
          <div className="absolute -left-4 -top-1 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">2</div>
          <h3 className="text-xl font-semibold">01/2024 – Current</h3>
          <h4 className="text-lg font-medium">Opash Software</h4>
          <p className="italic mb-2">Software Engineering</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Developed responsive web applications using React JS, Next.js and Tailwind CSS, enhancing user experience and performance.
            </li>
            <li>
              Collaborated with design and backend teams to integrate APIs and create seamless user interfaces.
            </li>
            <li>
              Implemented dynamic routing and server-side rendering for optimized SEO and fast load times.
            </li>
            <li>
              Improved code quality and maintainability by utilizing modern JavaScript practices and tools.
            </li>
            <li>
              Conducted code reviews and mentored junior developers, fostering a collaborative and growth-oriented team environment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
