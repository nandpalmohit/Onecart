import React, { useState } from "react";
import style from "../Product.module.css";
import { useSelector, useDispatch } from "react-redux";
import RightPopup from "../../../Elements/RightPopup";
import loadingImg from "../../../../../assets/gif/loading.gif";
import { useLocation } from "react-router";

const ProductQty = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [maxQty, setMaxQty] = useState(false);

  // popup msg
  const [alertMsg, setAlertMsg] = useState(null);
  // set poup is active
  const [AlertIsActive, setAlertIsActive] = useState(true);

  const totalPrice = useSelector((state) => state.totalPrice);
  const prMaxQuantity = localStorage.getItem("prMaxQuantity");
  const prPrice = useSelector((state) => state.prPrice);
  const prName = useSelector((state) => state.prName);
  const state = useSelector((state) => state);

  const [loading, setLoading] = useState(false);
  const [cartIsAdded, setCartIsAdded] = useState(false);

  // quantity increament
  const incQtyHandler = () => {
    if (quantity == prMaxQuantity) {
      setMaxQty(true);
    } else {
      dispatch({
        type: "incQty",
        prQuantity: quantity,
        prPrice: prPrice,
        addToCart: false,
      });
      setAlertMsg("You have added " + prName);
      setAlertIsActive(true);
      setCartIsAdded(false);
      setTimeout(() => {
        setAlertIsActive(false);
      }, 7000);
      setQuantity(quantity + 1);
    }
  };

  // quantity decreament
  const decQtyHandler = () => {
    dispatch({
      type: "decQty",
      prQuantity: quantity,
      prPrice: prPrice,
      addToCart: false,
    });
    setMaxQty(false);
    setAlertMsg("You have removed " + prName);
    setCartIsAdded(false);
    setAlertIsActive(true);
    setTimeout(() => {
      setAlertIsActive(false);
    }, 7000);
    setQuantity(quantity - 1);
  };

  // product add to cart
  const addToCartHandler = (productCallback) => {
    setLoading(true);
    setCartIsAdded(true);
    setMaxQty(false);
    // dispatch
    dispatch({
      type: "addToCart",
      addToCart: true,
      UniqueId: new Date().getTime() * Math.random() * 100000,
      cartCollection: {
        prName: prName,
        prPrice: prPrice,
        prQuantity: quantity,
        totalPrice: totalPrice,
        options: props.options,
        prCtName: location.state.prCtName,
        prCtSlug: location.state.prCtSlug,
        product: location.state.product,
        category: location.state.category,
      },
    });
    setAlertMsg("Your bag is successfully added");
    setAlertIsActive(true);
    setTimeout(() => {
      setLoading(false);
      setQuantity(1);
    }, 2000);
    setTimeout(() => {
      setAlertIsActive(false);
      setCartIsAdded(false);
    }, 7000);
  };
  props.productCallback(state);

  return (
    <>
      <div className="row my-3">
        <div className="col-sm-4 col-md-4 col-lg-3">
          <label htmlFor="inputPassword6" className="col-form-label bold-600">
            Quantity
          </label>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-5">
          {props.stock ? (
            <div className="btn-toolbar" role="toolbar">
              <div
                className={`${style.qty_button} btn-group`}
                role="group"
                aria-label="First group"
              >
                <button type="button" className={`btn btn-light disabled  `}>
                  {quantity} {quantity == 1 ? "item" : "items"}{" "}
                </button>
              </div>
              <div
                className={`${style.qty_button} btn-group-vertical`}
                role="group"
                aria-label="Third group"
              >
                <button
                  type="button"
                  className={`btn btn-light btn-sm ${style.qty_button_icon} `}
                  onClick={incQtyHandler}
                >
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  type="button"
                  className={`btn btn-light btn-sm ${style.qty_button_icon} `}
                  onClick={decQtyHandler}
                  disabled={quantity <= 1}
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
            </div>
          ) : (
            <>
              <label className="text-white badge bg-danger">Out of stock</label>
            </>
          )}
          {maxQty && (
            <small className="text-danger">
              You are selected maximum quantity for this product.
            </small>
          )}
          <div className="btn-group my-3" role="group" aria-label="Third group">
            <button
              type="button"
              className={`${style.add_to_cart}`}
              onClick={addToCartHandler}
            >
              <i className="fas fa-cart-plus pe-2"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {alertMsg && AlertIsActive && (
        <RightPopup
          alertMsg={alertMsg}
          alertBasket={totalPrice}
          success={cartIsAdded ? true : false}
        />
      )}
      {loading && (
        <div className={`${style.loading_modal}`}>
          <img src={loadingImg} alt="" width="200px" />
        </div>
      )}
    </>
  );
};

export default ProductQty;
