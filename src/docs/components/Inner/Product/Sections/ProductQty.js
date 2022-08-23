import React, { useState } from 'react';
import style from '../Product.module.css';
import { useSelector, useDispatch } from "react-redux";
import RightPopup from '../../../Elements/RightPopup';
import loadingImg from '../../../../../assets/gif/loading.gif';
import { useLocation } from 'react-router';

const ProductQty = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [alertMsg, setAlertMsg] = useState(null);
  const [AlertIsActive, setAlertIsActive] = useState(true);
  const [cartIsAdded, setCartIsAdded] = useState(false);

  
  console.log(prQuantity);
  
  const totalPrice = useSelector((state) => state.totalPrice);
  const prQuantity = useSelector((state) => state.prQuantity);
  const prPrice = useSelector((state) => state.prPrice);
  const prName = useSelector((state) => state.prName);
  const state = useSelector((state) => state);

  const incQtyHandler = () => {
    dispatch({
      type: "incQty",
      prQuantity: prQuantity,
      prPrice: prPrice,
      addToCart: false,
    });
    setAlertMsg('You have added ' + prName);
    setAlertIsActive(true);
    setCartIsAdded(false);
    setTimeout(() => {
      setAlertIsActive(false);
    }, 7000);
  }

  const decQtyHandler = () => {
    dispatch({
      type: "decQty",
      prQuantity: prQuantity,
      prPrice: prPrice,
      addToCart: false,

    });
    setAlertMsg('You have removed ' + prName);
    setCartIsAdded(false);
    setAlertIsActive(true);
    setTimeout(() => {
      setAlertIsActive(false);
    }, 7000);
  }

  const addToCartHandler = (productCallback) => {
    setCartIsAdded(true);
    dispatch({
      type: 'addToCart',
      prName: prName,
      prPrice: prPrice,
      prQuantity: prQuantity,
      totalPrice: totalPrice,
      options: props.options,
      prCtName: location.state.prCtName,
      prCtSlug: location.state.prCtSlug,
      product: location.state.product,
      category: location.state.category,
      addToCart: true,
    })
    setAlertMsg('Your bag is successfully added');
    setAlertIsActive(true);
    setTimeout(() => {
      setAlertIsActive(false);
      setCartIsAdded(false);
    }, 7000);
  }
  props.productCallback(state);

  return (
    <>
      <div className="row my-3">
        <div className="col-sm-4 col-md-4 col-lg-3">
          <label htmlFor="inputPassword6" className="col-form-label bold-600">prQuantity</label>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-5">
          {props.stock ?
            <div className="btn-toolbar" role="toolbar">
              <div className={`${style.qty_button} btn-group`} role="group" aria-label="First group">
                <button type="button" className={`btn btn-light disabled  `}> {prQuantity} {prQuantity == 1 ? 'item' : 'items'} </button>
              </div>
              <div className={`${style.qty_button} btn-group-vertical`} role="group" aria-label="Third group">
                <button type="button" className={`btn btn-light btn-sm ${style.qty_button_icon} `} onClick={incQtyHandler}><i className="fas fa-plus"></i></button>
                <button type="button" className={`btn btn-light btn-sm ${style.qty_button_icon} `} onClick={decQtyHandler} disabled={prQuantity <= 1}><i className="fas fa-minus"></i></button>
              </div>
            </div>
            : <label className='text-white badge bg-danger'>Out of stock</label>}
          <div className="btn-group my-3" role="group" aria-label="Third group">
            <button type="button" className={`${style.add_to_cart}`} onClick={addToCartHandler}>
              <i className="fas fa-cart-plus pe-2"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {alertMsg && AlertIsActive && <RightPopup alertMsg={alertMsg} alertBasket={totalPrice} success={cartIsAdded ? true : false} />}
    </>
  );
}

export default ProductQty;