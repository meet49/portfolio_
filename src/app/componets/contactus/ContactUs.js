"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form submission here
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg rounded-lg mt-10 text-white">
      <h2 className="text-4xl font-extrabold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
          <input
            className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-200 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="text-red-200 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="phone">Phone Number</label>
          <input
            className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Invalid phone number. Must be 10 digits.',
              },
            })}
          />
          {errors.phone && <p className="text-red-200 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            rows="5"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <p className="text-red-200 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-md font-bold hover:bg-gradient-to-l transition-colors duration-300 transform hover:scale-105"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
