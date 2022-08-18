import React, { useState, useEffect, } from 'react';
import CmpNavbar from '../CmpNavbar';
import CategoriesPage from '../../components/Inner/CategoriesPage';
import axios from 'axios';
import { apiProducts, apiCategories } from '../../api/apiLinks';
import { useLocation } from 'react-router';
import BreadCrumb from '../../components/Elements/BreadCrumb';

const CmpProducts = (props) => {


  const location = useLocation();

  const locatedCt = location.state.category;

  // products api response
  const [apiResponse, setapiResponse] = useState([]);
  const [categoryResponse, setcategoryResponse] = useState([]);
  const [apiErrors, setapiErrors] = useState();

  useEffect(() => {
    // get products data
    axios.get(`${apiProducts}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => setapiResponse(response.data))
      .catch(error => setapiErrors(error));

    // get categories data
    axios.get(`${apiCategories}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => setcategoryResponse(response.data))
      .catch(error => setapiErrors(error));
  }, []);




  return (
    <React.Fragment>
      <CmpNavbar />
      <div>
        <CategoriesPage apiResponse={apiResponse} apiErrors={apiErrors} category={categoryResponse} locatedCt={locatedCt} />
      </div>
    </React.Fragment>
  );
}

export default CmpProducts;