import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/Components/CommonComponents/Header/Header';
import './App.css';
import MainRoutes from './Components/Main/MainRoutes';
import Collection from './Components/UserComponents/Dashboard/Collections/CollectionDashboard/Collection';
import Footer from './Components/CommonComponents/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<MainRoutes />} />
        <Route exact path='/main/*' element={<MainRoutes />} />
      </Routes>
    </>
  );
};

export default App;
