import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from '../UserComponents/Dashboard/Collections/CollectionDashboard/Collection'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Collection />} />
            <Route path='/collections' element={<Collection />} />
        </Routes>
    )
}

export default MainRoutes