import React, { useCallback, useState } from 'react';
// import TopNavbar from './docs/Layouts/Navbar/TopNavbar';
import CmpIndex from './docs/layouts/CmpIndex';
import CmpProducts from './docs/layouts/InnerPage/CmpProducts';
import CmpProduct from './docs/layouts/InnerPage/CmpProduct';
import CmpAboutPage from './docs/layouts/About/CmpAboutPage';
import { Routes, Route, Navigate, useHistory } from "react-router-dom";



function App() {

  let cartContainer = new Set();

  const cartCallback = useCallback((cartBag) => {
    cartBag.addToCart && cartContainer.add(cartBag);
    console.log(cartContainer);
  }, []);


  return (
    <Routes>
      <Route path='/' index element={<CmpIndex cartCallback={cartCallback} />} />
      <Route path='/:url/:categories/:products' element={<CmpProducts cartCallback={cartCallback} />} />
      <Route path='/:url/:categories/:products/:slug' element={<CmpProduct productCallback={cartCallback} />} />
      <Route path='/' index element={<CmpIndex />} />
      <Route path='/about-us' index element={<CmpAboutPage />} />
      <Route path='/' index element={<CmpIndex />} />

    </Routes>
  );
}

export default App;
