import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from '../UserComponents/Dashboard/Collections/CollectionDashboard/Collection'
import Dashboard from '../UserComponents/Dashboard/HomePage/Dashboard'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/collections' element={<Collection />} />
        </Routes>
    )
}

export default MainRoutes