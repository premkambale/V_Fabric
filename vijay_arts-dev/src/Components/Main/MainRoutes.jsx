import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from '../UserComponents/Dashboard/Collections/CollectionDashboard/Collection'
import NewArrivals from '../UserComponents/Dashboard/Collections/NewArrivals/NewArrivals'
import Dashboard from '../UserComponents/Dashboard/HomePage/Dashboard'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/collections' element={<Collection />} />
            <Route path='/newArrival' element={<NewArrivals />} />
        </Routes>
    )
}

export default MainRoutes