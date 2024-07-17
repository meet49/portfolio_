import Image from "next/image";
import React from "react";

const About = () => {
  
  return (
    <div id="about" className="p-6 md:p-10 mb-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 animate-slide-in-left">
          <Image
            src="/profile.jpg"
            alt="Meet Sojitra"
            className="w-full h-auto border-[5px] border-blue-500"
            width={300}
            height={200}
          />
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-8 text-center md:text-left animate-slide-in-right">
          <h1 className="text-3xl font-bold mb-3">
            My Name Is Meet <span className="text-blue-500">Sojitra</span> & I
            Am A Front-End <span className="text-blue-500">Web Developer</span>
          </h1>
          <p className="text-lg mb-2 text-justify">
            <span className="text-xl text-blue-500 inline font-bold">As</span> A
            Software Engineering Student With 2 Years Of Experience In Frontend
            Development, I Have Immersed Myself In The Exciting Realm Of Web
            Development. It Amazes Me How The Fusion Of Creativity And Code Can
            Create Immersive Digital Experiences That Transcend Boundaries. I
            Specialize In Frontend Development, Utilizing HTML, CSS, JavaScript,
            And Cutting-Edge Frameworks Like React JS, Next JS, React Query, And
            ES6 JavaScript To Build Visually Striking And User-Friendly
            Websites.
          </p>
          <ul className="text-lg mb-2 space-y-2 grid grid-cols-1 sm:grid-cols-2 p-4 rounded-lg shadow-md">
            <li className="flex items-center">
              <strong className="mr-2 text-blue-500">Age:</strong> 22
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-blue-500">Gender:</strong> Male
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-blue-500">Language:</strong>{" "}
              English, Hindi, Gujarati
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-blue-500">Work:</strong> Front-End
              Developer
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-blue-500">Freelance:</strong>{" "}
              Available
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-blue-500">Phone:</strong>{" "}
              +91-97267-71777
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-blue-500">Email:</strong>{" "}
              meetsojitra49@gmail.com
            </li>
            <li className="flex items-center">
              <strong className="mr-2 text-blue-500">Country:</strong> India
            </li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

