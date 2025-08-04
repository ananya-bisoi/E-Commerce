import React, { useContext } from 'react';
import WishlistContext from '../Context/WishlistContext';
import UserContext from '../Context/UserContext';
import { FaTrashAlt } from 'react-icons/fa';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart, cartItems } = useContext(UserContext);

  const handleRemove = (id, name) => {
    if (window.confirm(`Are you sure you want to remove "${name}" from your wishlist?`)) {
      removeFromWishlist(id);
      alert('Removed from wishlist');
    }
  };

  const handleMoveToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);

    if (alreadyInCart) {
      alert('Already in cart');
    } else {
      addToCart(product);
      removeFromWishlist(product.id);
      alert('Moved to cart!');
    }
  };

  return (
    <div className="min-h-screen mt-20 p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative group"
            >
              <img
                src={product.image}
                alt={product.productName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 ">
                <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
                  {product.productName}
                </h3>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <p className="text-green-600 font-bold text-base">₹{product.price}</p>

                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1 hover:bg-blue-700 transition"
                    >
                      Move to Cart
                    </button>

                    <button
                      onClick={() => handleRemove(product.id, product.productName)}
                      className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm flex items-center gap-1 hover:bg-red-200 transition"
                    >
                      <FaTrashAlt />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
