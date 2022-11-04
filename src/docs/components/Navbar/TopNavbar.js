import React, { useEffect, useState } from "react";
import style from "./TopNavbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// props by layout/CmpNavbar
const TopNavbar = (props) => {
  const openLoginModal = () => {
    props.setIsLoginActive(true);
  };

  const authToken = useSelector((state) => state.authToken);

  return (
    <>
      <div className={`${style.container} px-4 py-2`}>
        <div className="row justify-content-end align-items-center">
          <div className="col-sm-4">
            {props.title && <p className="mb-0 font-sans">{props.title}</p>}
          </div>
          <div className={`col-sm-8 ${style.navbar_links} font-sans`}>
            <Link to="/">
              <i className="fa-solid fa-home"></i> Home
            </Link>
            <Link to="/contact-us">
              <i className="fa-solid fa-headphones-simple"></i> Contact
            </Link>
            <Link to="/about-us">
              <i className="fa-solid fa-eject"></i> About
            </Link>
            <Link to="/cart">
              <i className="fa-solid fa-cart-flatbed"></i> Your cart
            </Link>
            {authToken.token ? (
              <span className="c-pointer">
                <i className="fas fa-user-circle"></i> {authToken.userName}
              </span>
            ) : (
              <span className="c-pointer" onClick={openLoginModal}>
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
