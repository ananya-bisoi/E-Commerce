// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setLoggedInUser(parsedUser);
      } catch (err) {
        console.warn('Failed to parse user from localStorage:', err);
        localStorage.removeItem('user'); // clean bad data
        setLoggedInUser(null);
      }
    }
  }, []);

  const login = (userData) => {
    setLoggedInUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // 🔥 Updated logout
  const logout = async () => {
    try {
      await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // very important to send cookies!
      });
    } catch (err) {
      console.error('Logout failed:', err);
    }

    localStorage.removeItem('user');
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
