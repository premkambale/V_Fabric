import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from '../src/Components/CommonComponents/Header/Header'
import './App.css'
import MainRoutes from './Components/Main/MainRoutes'
import Collection from './Components/UserComponents/Dashboard/Collections/CollectionDashboard/Collection'
import Footer from './Components/CommonComponents/Footer/Footer'

const App = () => {
  return (

    <>
      <Routes>
        <Route exact path='/' element={<MainRoutes />} />
        <Route exact path='/main/*' element={<MainRoutes />} />
        
      </Routes>
    </>

  )
}

export default App
