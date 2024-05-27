import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../src/Components/CommonComponents/Header/Header'
import './App.css'
import MainRoutes from './Components/Main/MainRoutes'
import Collection from './Components/UserComponents/Dashboard/Collections/CollectionDashboard/Collection'

const App = () => {
  return (

    <>
      <Header />
      <Routes>
        <Route exact path='/*' element={<MainRoutes />} />
      </Routes>

    </>

  )
}

export default App
