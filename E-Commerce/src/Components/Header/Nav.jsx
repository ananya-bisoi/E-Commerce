import React, { useState, useContext, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import logo from '../../Images/logo.jpg';
import { AuthContext } from '../../Context/AuthContext';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { loggedInUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const firstLetter = loggedInUser?.username?.charAt(0)?.toUpperCase() || '';

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-3 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-13 w-13 rounded-full shadow" />
          <span className="text-xl font-bold text-blue-700">MyShop</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-grow justify-end">
          <ul className="flex gap-6 items-center text-gray-700 font-medium relative">
            {/* Nav Items */}
            <li><NavLink to="/" className={({ isActive }) => isActive ?"text-violet-500 font-bold" : "hover:text-blue-600"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ?"text-violet-500 font-bold" : "hover:text-blue-600"}>About</NavLink></li>
            <li><NavLink to="/product" className={({ isActive }) => isActive ?"text-violet-500 font-bold" : "hover:text-blue-600"}>Product</NavLink></li>
            <li><NavLink to="/wishlist" className={({ isActive }) => isActive ?"text-red-600 font-bold" : "hover:text-red-600"}><FaHeart /></NavLink></li>
            <li><NavLink to="/cart" className={({ isActive }) => isActive ?"text-blue-500 font-bold" : "hover:text-blue-600"}><FaShoppingCart /></NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ?"text-violet-500 font-bold" : "hover:text-blue-600"}>Contact</NavLink></li>

            {/* Profile or Login */}
            {loggedInUser ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="focus:outline-none w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-semibold select-none"
                  title={loggedInUser.username}
                >
                  {firstLetter}
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-12 w-44 bg-white shadow-lg rounded-lg border z-50 animate-fade-in">
                    <div className="absolute top-[-6px] right-3 w-3 h-3 rotate-45 bg-white border-l border-t border-gray-300"></div>
                    <button
                      onClick={() => {
                        navigate('/orders');
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                    >
                      My Orders
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
            <li><NavLink to="/product" onClick={() => setIsOpen(false)}>Product</NavLink></li>
            <li><NavLink to="/wishlist" onClick={() => setIsOpen(false)}>Wishlist</NavLink></li>
            <li><NavLink to="/cart" onClick={() => setIsOpen(false)}>Cart</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
            {loggedInUser ? (
              <>
                <li className="flex items-center gap-2 px-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold select-none">
                    {firstLetter}
                  </div>
                  <span className="text-sm">{loggedInUser.username}</span>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate('/orders');
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  >
                    My Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-red-600"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 block"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
