import React, { useState } from 'react';
// import TopNavbar from './docs/Layouts/Navbar/TopNavbar';
import CmpIndex from './docs/layouts/CmpIndex';
import CmpProducts from './docs/layouts/InnerPage/CmpProducts';
import CmpProduct from './docs/layouts/InnerPage/CmpProduct';
import CmpAboutPage from './docs/layouts/About/CmpAboutPage';
import { Routes, Route, Navigate, useHistory } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' index element={<CmpIndex />} />
      <Route path='/:url/:categories/:products' element={<CmpProducts />} />
      <Route path='/:url/:categories/:products/:slug' element={<CmpProduct />} />
      <Route path='/' index element={<CmpIndex />} />
      <Route path='/about-us' index element={<CmpAboutPage />} />
      <Route path='/' index element={<CmpIndex />} />

    </Routes>
  );
}

export default App;
