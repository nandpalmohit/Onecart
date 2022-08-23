import React, { useEffect, useState } from 'react';
import CmpNavbar from '../CmpNavbar';
import ProductPage from '../../components/Inner/Product/ProductPage';
import { useLocation } from 'react-router';
import { apiProducts } from '../../api/apiLinks';
import axios from 'axios';

const CmpProduct = (props) => {

  const [apiResponse, setapiResponse] = useState([]);
  const [apiErrors, setapiErrors] = useState();

  const location = useLocation();


  useEffect(() => {
    axios.get(`${apiProducts}/${location.state.product.slug}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => setapiResponse(response.data))
      .catch(error => setapiErrors(error));
      
  }, []);

  return (
    <>
      <CmpNavbar />
      <ProductPage apiResponse={apiResponse} apiErrors={apiErrors} productCallback={props.productCallback} />
    </>
  );
}

export default CmpProduct;