import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Collection from '../UserComponents/Dashboard/Collections/CollectionDashboard/Collection'
import Dashboard from '../UserComponents/Dashboard/HomePage/Dashboard'
import Header from '../CommonComponents/Header/Header'
import Footer from '../CommonComponents/Footer/Footer'
import Wishlist from '../UserComponents/Wishlist/Wishlist'
import Carts from '../UserComponents/Carts/Carts'
import Profile from '../CommonComponents/Profile/Profile'
import NewArrivals from '../UserComponents/Dashboard/Collections/NewArrivals/NewArrivals'
const MainRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/collections' element={<Collection />} />
                <Route path='/newArrivals' element={<NewArrivals />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/cart' element={<Carts />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </>
    )
}

export default MainRoutes