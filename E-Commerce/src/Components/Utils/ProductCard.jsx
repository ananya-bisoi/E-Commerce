import React, { useState, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import WishlistContext from '../../Context/WishlistContext'; 
import {UserContext} from '../../Context/UserContextProvider';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {addToCart}=useContext(UserContext);
  const [num, setNum] = useState(1);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const liked = isInWishlist(product.id);

  const handleIncrease = () => {
    setNum((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (num > 1) setNum((prev) => prev - 1);
  };

  const toggleLike = () => {
    if (liked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

const handleCart = () => {
  if (num === 0) return;

  const productToAdd = {
    id: product.id,
    image: product.image,
    productName: product.productName,
    price: product.price,
    quantity: num
  };

  addToCart(productToAdd);
  navigate('/cart');
};

return(
<div className="relative w-full p-3 flex flex-col items-center text-left space-y-2 bg-white shadow-md rounded-lg transition hover:shadow-lg mx-auto">
  {/* Like Button */}
  <button
    onClick={toggleLike}
    className="absolute top-2 right-2 text-lg transition"
  >
    <FaHeart className={liked ? 'text-red-500' : 'text-gray-400'} />
  </button>

  {/* Image Section - shorter */}
  <div className="w-full h-32 sm:h-36 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
    <img
      src={product.image}
      alt={product.productName}
      className="object-contain w-full h-full"
    />
  </div>

  {/* Product Info */}
  <h3 className="text-center text-sm sm:text-base font-semibold text-gray-800 leading-snug">
    {product.productName}
  </h3>
  <p className="text-blue-600 text-sm sm:text-base font-medium">
    ₹{product.price}
  </p>

  {/* Cart & Quantity Controls */}
  <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 mt-auto">
    <button
      onClick={handleCart}
      className="w-full sm:w-auto flex-1 bg-blue-600 text-white text-xs sm:text-sm py-1.5 rounded-md hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>

    <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
      <button
        onClick={handleDecrease}
        className="px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm"
      >
        −
      </button>
      <span className="px-3 py-1 text-sm text-gray-800 bg-white">{num}</span>
      <button
        onClick={handleIncrease}
        className="px-2 py-1 bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm"
      >
        +
      </button>
    </div>
  </div>
</div>
)
}

export default ProductCard;
