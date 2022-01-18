import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Cities from './components/Cities';
import Continents from './components/Continents';
import Access from './components/Access';
import CardLogup from './components/CardLogup';
import Footer from './components/Footer';
import CardTinerary from './components/CardTinerary';



function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cardLogup' element={<CardLogup />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/continents' element={<Continents />} />
        <Route path='/continents/cardTinerary' element={<CardTinerary />} />
        <Route path='/access' element={<Access />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
