import React, { useCallback, useState } from "react";
// import TopNavbar from './docs/Layouts/Navbar/TopNavbar';
import CmpIndex from "./docs/layouts/CmpIndex";
import CmpProducts from "./docs/layouts/InnerPage/CmpProducts";
import CmpProduct from "./docs/layouts/InnerPage/CmpProduct";
import CmpAboutPage from "./docs/layouts/About/CmpAboutPage";
import CmpCart from "./docs/layouts/Cart/CmpCart";
import CmpAuth from "./docs/layouts/Auth/CmpAuth";
import { Routes, Route, Navigate, useHistory } from "react-router-dom";

function App() {
  let cartContainer = new Set();

  const [isLoginActive, setIsLoginActive] = useState(false);

  const cartCallback = useCallback((cartBag) => {
    cartBag.addToCart && cartContainer.add(cartBag);
    console.log(cartContainer);
  }, []);

  const wishlistCallback = useCallback((wishList) => {
    // console.log(wishList);
  }, []);

  const authCallback = useCallback((auth) => {
    // console.log(auth);
  });

  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <CmpIndex
            cartCallback={cartCallback}
            wishlistCallback={wishlistCallback}
            authCallback={authCallback}
            isLoginActive={isLoginActive}
            setIsLoginActive={setIsLoginActive}
          />
        }
      />
      <Route path="/login" element={<CmpAuth />} />
      <Route
        path="/:url/:categories/:products"
        element={
          <CmpProducts
            cartCallback={cartCallback}
            wishlistCallback={wishlistCallback}
            authCallback={authCallback}
            isLoginActive={isLoginActive}
            setIsLoginActive={setIsLoginActive}
          />
        }
      />
      <Route
        path="/:url/:categories/:products/:slug"
        element={
          <CmpProduct
            productCallback={cartCallback}
            wishlistCallback={wishlistCallback}
            authCallback={authCallback}
            isLoginActive={isLoginActive}
            setIsLoginActive={setIsLoginActive}
          />
        }
      />
      <Route
        path="/about-us"
        index
        element={
          <CmpAboutPage
            authCallback={authCallback}
            isLoginActive={isLoginActive}
            setIsLoginActive={setIsLoginActive}
          />
        }
      />
      <Route
        path="/cart"
        index
        element={
          <CmpCart
            authCallback={authCallback}
            isLoginActive={isLoginActive}
            setIsLoginActive={setIsLoginActive}
            cartContainer={cartContainer}
          />
        }
      />
    </Routes>
  );
}

export default App;
