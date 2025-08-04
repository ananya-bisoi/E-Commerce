import React, { useState } from 'react';
import AproductsP from '../Components/API/AproductsP' ;
import ProductCard from '../Components/Utils/ProductCard';

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Men', 'Women', 'Kids', 'Electronics'];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? AproductsP
    : AproductsP.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-24 px-4 bg-gray-50 min-h-screen">

      {/* Banner Section */}
      <div className="w-full mb-10 flex justify-center">
        <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80"
            alt="Product Banner"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold tracking-wide text-center px-4">
              Explore Top Categories & Latest Trends
            </h2>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((label, idx) => (
          <button
            key={idx}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:scale-105 hover:shadow-xl 
              ${selectedCategory === label 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-indigo-100'}`}
            onClick={() => setSelectedCategory(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
           product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
