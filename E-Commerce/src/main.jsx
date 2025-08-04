import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements  } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import Cart from './Pages/Cart.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Product from './Pages/Product.jsx'
import SignUp from './Pages/SignUp.jsx'
import Contact from './Pages/Contact.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/product'element={<Product/>} />
      <Route path='/login'element={<Login/>} />
      <Route path='/signup'element={<SignUp/>} />
       <Route path='/contact'element={<Contact/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
