import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ProductPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';


function App() {
  return (
    <>
    <Navigation></Navigation>

    <Routes>
      <Route path="/" element={<ProductPage></ProductPage>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
    </>
  )
}

export default App;
