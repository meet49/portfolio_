"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form submission here
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-8 bg-white text-black shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                placeholder="First Name"
                className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                placeholder="Last Name"
                className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="lastName"
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="tel"
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number. Must be 10 digits.",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-lg font-semibold mb-2"
              htmlFor="message"
            >
              Write a Message ...
            </label>
            <textarea
              placeholder="Write a message..."
              className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              rows="5"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            className="w-full bg-blue-500 text-white p-4 rounded-md font-bold hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
            type="submit"
          >
            Submit Now
          </button>
        </form>
      </div> 
      <div className=" mx-auto  p-8  text-black shadow-lg rounded-lg mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center p-6 text-white border rounded-md">
          <FaPhoneAlt className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-bold">Call Us on</h3>
            <p className="text-md">+91 9726771777</p>
          </div>
        </div>
        <div className="flex items-center p-6 text-white border rounded-md">
          <FaEnvelope className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-bold">Email Us</h3>
            <p className="text-md">meetsojitra49@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center p-6 text-white border rounded-md">
          <FaMapMarkerAlt className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-bold">Our Location</h3>
            <p className="text-md">89,Suvidha Ro-House, Near Royal Plaza</p>
            <p className="text-md">Surat, 395008</p>
          </div>
        </div>
      </div>
    </div>
      <div className="mt-10 w-full p-7 mb-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2926788056925!2d72.896741554998!3d21.220239608241386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045d1198128ed%3A0xbd409fcc7b75aa60!2sSuvidha%20row%20house!5e0!3m2!1sen!2sin!4v1722010877399!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
