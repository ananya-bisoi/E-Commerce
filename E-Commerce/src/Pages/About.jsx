import React from 'react';
import { FaStar } from 'react-icons/fa';
import hdmonitor from '../Images/hdmonitor.jpg'
import heels from '../Images/heels.jpg'
import headphone from '../Images/headphone.jpg'
import bshort from '../Images/bshort.jpg'
import formal from '../Images/formal.jpg'
const About = () => {
  const reviews = [
    {
      name: 'Rohit Sharma',
      comment: 'Amazing quality clothing and fast delivery. MyShop never disappoints!',
      rating: 5,
    },
    {
      name: 'Sneha Verma',
      comment: 'Bought a laptop from MyShop — works like a charm! Highly recommended.',
      rating: 4,
    },
    {
      name: 'Karan Patel',
      comment: 'Affordable fashion and responsive customer support. Will shop again.',
      rating: 5,
    },
  ];

  // Sample images showcasing clothing and electronics (replace URLs with your own images)
  const galleryImages = [
    {
      src: heels,
      alt: 'monitor',
    },
    {
      src: hdmonitor,
      alt: 'heels',
    },
    {
      src: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
      alt: 'Trendy Outfits',
    },
    {
      src: bshort,
      alt: 'shorts',
    },
    {
      src: formal,
      alt: 'shirt',
    },
    {
      src: headphone,
      alt: 'Headphones',
    },
  ];

  return (
    <div className="bg-white text--800 pt-20 px-6 sm:px-12 lg:px-24 py-16 space-y-16">
      {/* Brand Intro */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-violet-600">Welcome to MyShop</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At <span className="text-blue-600 font-semibold">MyShop</span>, we specialize in bringing you the latest in fashion and technology.
          From trendsetting outfits to cutting-edge electronics, we deliver quality, trust, and speed at your fingertips.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-6xl mx-auto">
        <h3 className="text-3xl text-cyan-600 font-semibold mb-8 text-center">Explore Our Collection</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-500 hover:scale-105"
              title={alt}
            >
              <img src={src} alt={alt} className="w-full h-64 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-6xl mx-auto">
        <h3 className="text-3xl text-emerald-600 font-semibold text-center mb-10">What Our Customers Say</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="font-semibold text-lg mb-2">{review.name}</div>
              <p className="text-gray-700 mb-4">"{review.comment}"</p>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
