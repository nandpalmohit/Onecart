import React from "react";
import CartProductList from "./CartProductList";
import CartSummary from "./CartSummary";

const CartView = (props) => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-9 py-2">
            <CartProductList cartContainer={props.cartContainer} />
          </div>
          <div className="col-md-3 py-2">
            <CartSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
