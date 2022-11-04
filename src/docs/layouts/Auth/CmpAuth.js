import React from "react";
import AuthLogin from "../../components/Inner/Auth/AuthLogin";

const CmpAuth = (props) => {
  return (
    <>
      <AuthLogin
        setIsLoginActive={props.setIsLoginActive}
        authCallback={props.authCallback}
      />
    </>
  );
};

export default CmpAuth;
