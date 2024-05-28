import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../src/Components/CommonComponents/Header/Header'
import './App.css'
import MainRoutes from './Components/Main/MainRoutes'
import Collection from './Components/UserComponents/Dashboard/Collections/CollectionDashboard/Collection'
import Footer from './Components/CommonComponents/Footer/Footer'

const App = () => {
  return (

    <>
      <Header />
      <Routes>
        <Route exact path='/*' element={<MainRoutes />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
