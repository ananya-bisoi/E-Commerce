// src/context/UserContext.jsx
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]); // registered users list
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
          id: product.id || Date.now() + Math.random(),
        }
      ];
    });
  };

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      cartItems,
      setCartItems,
      addToCart,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
