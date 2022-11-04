import React from "react";
import CmpAuth from "../Auth/CmpAuth";
import CmpNavbar from "../CmpNavbar";
import CartView from "../../components/Inner/Cart/CartView";

const CmpCart = (props) => {
  return (
    <>
      <div className={props.isLoginActive ? "enabled" : "disabled"}>
        <CmpNavbar
          isLoginActive={props.isLoginActive}
          setIsLoginActive={props.setIsLoginActive}
        />
        <CartView cartContainer={props.cartContainer} />
        {props.isLoginActive && (
          <CmpAuth
            setIsLoginActive={props.setIsLoginActive}
            authCallback={props.authCallback}
          />
        )}
      </div>
    </>
  );
};

export default CmpCart;
