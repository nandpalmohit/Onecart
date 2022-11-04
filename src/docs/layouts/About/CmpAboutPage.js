import React from "react";
import CmpNavbar from "../CmpNavbar";
import CmpAuth from "../Auth/CmpAuth";

const CmpAboutPage = (props) => {
  return (
    <div className={props.isLoginActive ? "enabled" : "disabled"}>
      <CmpNavbar
        isLoginActive={props.isLoginActive}
        setIsLoginActive={props.setIsLoginActive}
      />
      {props.isLoginActive && (
        <CmpAuth setIsLoginActive={props.setIsLoginActive} />
      )}
    </div>
  );
};

export default CmpAboutPage;
