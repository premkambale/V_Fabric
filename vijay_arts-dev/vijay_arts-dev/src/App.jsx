import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../src/Auth/Login'
import Register from './Auth/Register'
import Header from '../src/Components/CommonComponents/Header/Header'
import './App.css'
import Cart from './Components/UserComponents/Carts/Carts'

const App = () => {
  return (

    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/user/register' element={<Register />} />
        <Route exact path='user/cart' element={<Cart />} />
      </Routes>

    </>

  )
}

export default App
