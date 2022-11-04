import React, { useState, useEffect } from "react";
import CmpNavbar from "../CmpNavbar";
import CategoriesPage from "../../components/Inner/CategoriesPage";
import CmpAuth from "../Auth/CmpAuth";
import axios from "axios";
import { apiProducts, apiCategories } from "../../api/apiLinks";
import { useLocation } from "react-router";

const CmpProducts = (props) => {
  const location = useLocation();

  const locatedCt = location.state.category;

  // products api response
  const [apiResponse, setapiResponse] = useState([]);
  const [categoryResponse, setcategoryResponse] = useState([]);
  const [apiErrors, setapiErrors] = useState();

  useEffect(() => {
    // get products data
    axios
      .get(`${apiProducts}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setapiResponse(response.data))
      .catch((error) => setapiErrors(error));

    // get categories data
    axios
      .get(`${apiCategories}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setcategoryResponse(response.data))
      .catch((error) => setapiErrors(error));
  }, []);

  return (
    <div className={props.isLoginActive ? "enabled" : "disabled"}>
      <CmpNavbar
        isLoginActive={props.isLoginActive}
        authCallback={props.authCallback}
        setIsLoginActive={props.setIsLoginActive}
      />
      <div>
        <CategoriesPage
          apiResponse={apiResponse}
          apiErrors={apiErrors}
          category={categoryResponse}
          locatedCt={locatedCt}
        />
      </div>
      {props.isLoginActive && (
        <CmpAuth
          setIsLoginActive={props.setIsLoginActive}
          authCallback={props.authCallback}
        />
      )}
    </div>
  );
};

export default CmpProducts;
