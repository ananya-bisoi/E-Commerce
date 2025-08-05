import React from 'react';
import './App.css';
import Nav from './Components/Header/Nav';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from './Context/UserContextProvider';
import WishlistContextProvider from './Context/WishlistContextProvider';
import { AuthProvider } from './Context/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <UserContextProvider>
        <WishlistContextProvider>
          <Nav />
          <Outlet />
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </WishlistContextProvider>
      </UserContextProvider>
    </AuthProvider>
  );
}

export default App;
