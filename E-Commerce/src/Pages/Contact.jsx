import React, { useState } from 'react';
import { toast } from 'react-toastify';
import logo from '../Images/logo.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent!', {
      position: 'top-center',
      autoClose: 2000,
    });
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-purple-100 px-4 pt-20 pb-10">
      <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - eCommerce Branding */}
        <div className="flex flex-col justify-center px-6 space-y-6 text-center md:text-left mt-6 md:-mt-12">
          {/* MyShop Logo and Name */}
<div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
  <img src={logo} alt="MyShop Logo" className="h-12 w-12 object-cover rounded-full drop-shadow-xl/30" />
  <h1 className="text-4xl font-extrabold text-purple-700 select-none">MyShop</h1>
</div>
          {/* Headline */}
          <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
            We’re Here to Help You
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            Need assistance? Whether it’s product questions, order tracking, or returns, our friendly support team is ready to assist you.
          </p>

          {/* Support Highlights */}
          <ul className="text-purple-700 font-semibold space-y-2 max-w-md mx-auto md:mx-0">
            <li>• Fast & Reliable Customer Service</li>
            <li>• 24/7 Order Support</li>
            <li>• Hassle-Free Returns & Refunds</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full p-4 pt-6 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full p-4 pt-6 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">
              Email
            </label>
          </div>

          {/* Mobile */}
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder=" "
              className="peer w-full p-4 pt-6 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">
              Mobile Number
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              rows="4"
              className="peer w-full p-4 pt-6 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-200 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
