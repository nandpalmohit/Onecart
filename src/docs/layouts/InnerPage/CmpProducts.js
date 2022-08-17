import React, { useState, useEffect,  } from 'react';
import CmpNavbar from '../CmpNavbar';
import CategoriesPage from '../../components/Inner/CategoriesPage';
import axios from 'axios';
import { apiProducts } from '../../api/apiLinks';
import { useLocation } from 'react-router';

const CmpProducts = (props) => {

  
  const location = useLocation();

  const locatedCt = location.state.category;

  // products api response
  const [apiResponse, setapiResponse] = useState([]);
  const [apiErrors, setapiErrors] = useState();

  useEffect(() => {
    axios.get(`${apiProducts}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => setapiResponse(response.data))
      .catch(error => setapiErrors(error));
  }, []);



  return (
    <React.Fragment>
      <CmpNavbar />
      <div className='bg-light'>
        <CategoriesPage apiResponse={apiResponse} apiErrors={apiErrors} locatedCt={locatedCt} />

      </div>
    </React.Fragment>
  );
}

export default CmpProducts;