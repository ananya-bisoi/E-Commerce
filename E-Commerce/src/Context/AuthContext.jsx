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
        localStorage.removeItem('user');  // clean bad data
        setLoggedInUser(null);
      }
    }
  }, []);

  const login = (userData) => {
    setLoggedInUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
