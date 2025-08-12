import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { UserContext } from '../Context/UserContextProvider';

const Cart = () => {
  const { loggedInUser } = useContext(AuthContext);
  const { cartItems, setCartItems } = useContext(UserContext);
  const navigate = useNavigate();

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    addressLine: '',
    pincode: '',
    paymentMethod: 'Cash on Delivery', // pre-selected
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleCheckoutClick = () => {
    if (!loggedInUser) {
      toast.warning('Please login to place an order.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      return;
    }

    if (cartItems.length === 0) {
      toast.warning('Your cart is empty.');
      return;
    }

    setShowAddressForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loggedInUser) {
      toast.error('You must be logged in to place an order.');
      navigate('/login');
      return;
    }

const orderData = {
  userId: loggedInUser._id,
  items: cartItems.map(item => ({
    productId: item._id || item.id,
    productName: item.productName || item.name, // ✅ Ensure name stored
    image: item.image, // ✅ Ensure image stored
    price: item.price,
    quantity: item.quantity
  })),
  totalAmount: totalPrice,
  address: {
    fullName: address.fullName,
    phone: address.phone,
    addressLine: address.addressLine,
    pincode: address.pincode
  },
  paymentMethod: address.paymentMethod,
};


    try {
      const res = await fetch('http://localhost:5000/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          <div className="flex items-center gap-2">
            <span>🎉 Order placed successfully!</span>
          </div>,
          { position: 'top-center' }
        );
        setCartItems([]);
        setShowAddressForm(false);
        setAddress({
          fullName: '',
          phone: '',
          addressLine: '',
          pincode: '',
          paymentMethod: 'Cash on Delivery', // reset to default
        });
      } else {
        toast.error(data.msg || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to place order');
    }
  };

  return (
    <div className="pt-28 px-6 min-h-screen mb-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Cart Items */}
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-24 h-24 object-contain border rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.productName}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Price: ₹{item.price.toLocaleString()}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-gray-800 font-bold mt-1">
                    Total: ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Summary & Checkout */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-4 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-gray-700 text-base">
              <p>Total Items: {cartItems.length}</p>
              <p className="font-semibold text-md">
                Total Price: ₹{totalPrice.toLocaleString()}
              </p>
              <p className="text-green-700 font-medium">
                Payment Method: {address.paymentMethod}
              </p>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-2 rounded-md mt-6 w-full hover:from-blue-800 hover:to-indigo-600 transition-colors duration-300 shadow-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Modal for Address Form */}
      {showAddressForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-2xl p-8 w-full max-w-md relative border border-gray-300">
            <button
              onClick={() => setShowAddressForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold transition-colors duration-200"
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-wide">
              Shipping Address
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={address.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={address.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
              <textarea
                name="addressLine"
                placeholder="Full Address"
                value={address.addressLine}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={address.pincode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />

              {/* Cash on Delivery Option */}
              <div className="flex items-center gap-2 border p-3 rounded-lg">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={address.paymentMethod === 'Cash on Delivery'}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="cod" className="text-gray-700">
                  Cash on Delivery
                </label>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg w-full font-semibold shadow-md transition duration-300"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
