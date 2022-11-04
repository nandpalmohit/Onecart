import React, { useState } from "react";
import RightPopup from "../../../Elements/RightPopup";
import style from "../Product.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";

const ProductChoice = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [alertMsg, setalertMsg] = useState("");
  const [AlertIsActive, setAlertIsActive] = useState(true);

  const wishlistData = useSelector((state) => state);
  const prPrice = useSelector((state) => state.prPrice);
  const prName = useSelector((state) => state.prName);

  const handleWishlist = () => {
    dispatch({
      type: "wishlist",
      prName: prName,
      prPrice: prPrice,
      prCtName: location.state.prCtName,
      prCtSlug: location.state.prCtSlug,
      product: location.state.product,
      category: location.state.category,
    });

    setalertMsg("✔ Product Added to Wishlist");
    setTimeout(() => {
      setAlertIsActive(false);
    }, 7000);
  };
  const handleCompare = () => {};

  return (
    <>
      <hr className={`${style.hr}`} />
      <a onClick={handleWishlist} className={`${style.link}`}>
        <span className="pe-3">
          <i className="fas fa-heart me-1"></i> Wishlist
        </span>
      </a>
      <a onClick={handleCompare} className={`${style.link}`}>
        <span className="ps-3">
          <i className="fas fa-exchange-alt me-1"></i> Compare
        </span>
      </a>
      {alertMsg && AlertIsActive && <RightPopup alertMsg={alertMsg} />}
    </>
  );
};

export default ProductChoice;
