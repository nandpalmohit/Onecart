import React, { useEffect, useState } from "react";
import CmpNavbar from "../CmpNavbar";
import ProductPage from "../../components/Inner/Product/ProductPage";
import CmpAuth from "../Auth/CmpAuth";
import { useLocation } from "react-router";
import { apiProducts } from "../../api/apiLinks";
import axios from "axios";

const CmpProduct = (props) => {
  const [apiResponse, setapiResponse] = useState([]);
  const [apiErrors, setapiErrors] = useState();

  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${apiProducts}/${location.state.product.slug}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setapiResponse(response.data))
      .catch((error) => setapiErrors(error));
  }, []);

  return (
    <div className={props.isLoginActive ? "enabled" : "disabled"}>
      <CmpNavbar
        wishlistCallback={props.wishlistCallback}
        isLoginActive={props.isLoginActive}
        authCallback={props.authCallback}
        setIsLoginActive={props.setIsLoginActive}
      />
      <ProductPage
        apiResponse={apiResponse}
        apiErrors={apiErrors}
        productCallback={props.productCallback}
        wishlistCallback={props.wishlistCallback}
      />
      {props.isLoginActive && (
        <CmpAuth
          setIsLoginActive={props.setIsLoginActive}
          authCallback={props.authCallback}
        />
      )}
    </div>
  );
};

export default CmpProduct;
