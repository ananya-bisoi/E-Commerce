import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]); // Registered users
  const [loggedInUser, setLoggedInUser] = useState(null); // 🔥 Track current user
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: product.quantity || 1,
          id: product.id || Date.now() + Math.random(), // fallback unique ID
        }
      ];
    });
  };

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      loggedInUser,        // ✅ provide current user
      setLoggedInUser,     // ✅ provide setter function
      cartItems,
      setCartItems,
      addToCart
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
