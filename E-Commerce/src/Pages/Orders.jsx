import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  // Fetch orders on mount
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/orders/my', {
        credentials: 'include',
      });
      const data = await res.json();
      if (res.ok) {
        setOrders(data);
      } else {
        console.error(data.msg || 'Failed to load orders');
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  // Cancel order handler
  const handleCancel = async (orderId) => {
    if (!window.confirm('Are you sure you want to cancel this order?')) return;

    try {
      const res = await fetch(`http://localhost:5000/api/orders/cancel/${orderId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await res.json();
      if (res.ok) {
        alert('Order cancelled successfully');
        fetchOrders(); // Refresh list
      } else {
        alert(data.msg || 'Failed to cancel order');
      }
    } catch (err) {
      console.error(err);
      alert('Error cancelling order');
    }
  };

  // Toggle collapse
  const toggleExpand = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="pt-28 px-4 sm:px-6 md:px-8 min-h-screen max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-center">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const isExpanded = expandedOrderId === order._id;
            return (
              <div
                key={order._id}
                className="bg-white shadow-md rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => toggleExpand(order._id)}
                  className="w-full flex justify-between items-center px-6 py-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-expanded={isExpanded}
                >
                  <div>
                    <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
                    <p className="text-sm text-gray-600">
                      Placed on: {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 space-y-4">
                    {/* Shipping Address */}
                    <p className="text-sm mb-2 font-medium text-gray-800">
                      Shipping Address:{' '}
                      {typeof order.address === 'string'
                        ? order.address
                        : `${order.address.fullName}, ${order.address.phone}, ${order.address.addressLine}, ${order.address.pincode}`}
                    </p>

                    {/* Payment Method */}
                    <p className="text-sm mb-2 font-medium text-gray-800">
                      Payment Method: {order.paymentMethod || 'Cash on Delivery'}
                    </p>

                    {/* Items */}
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div
                          key={item.productId ? item.productId.toString() : `item-${index}`}
                          className="flex items-center justify-between gap-4 border-b pb-3"
                        >
                          <img
                            src={item.image || '/default-product-image.png'}
                            alt={item.productName || 'Product'}
                            className="w-16 h-16 object-contain rounded border"
                          />
                          <div className="flex-1">
                            <p className="text-md font-medium">
                              {item.productName} × {item.quantity}
                            </p>
                            <p className="text-sm text-gray-600">
                              ₹{item.price.toLocaleString()} each
                            </p>
                          </div>
                          <p className="text-md font-semibold">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 text-right font-bold text-lg text-indigo-700">
                      Total: ₹{order.totalAmount.toLocaleString()}
                    </div>

                    {/* Cancel Button */}
                    <div className="text-right mt-4">
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md shadow-md transition duration-300"
                      >
                        Cancel Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
