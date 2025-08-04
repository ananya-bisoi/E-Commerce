import React from 'react'
import './App.css'
import Nav from './Components/Header/Nav'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './Context/UserContextProvider'
import WishlistContextProvider from './Context/WishlistContextProvider'
import { AuthProvider } from './Context/AuthContext'

function App() {

  return (
    <>
    <AuthProvider>
    <UserContextProvider>
    <WishlistContextProvider>
    <Nav/>
    <Outlet/>
    <Footer/>
    </WishlistContextProvider>
    </UserContextProvider>
    </AuthProvider>
    </>
  )
}

export default App
