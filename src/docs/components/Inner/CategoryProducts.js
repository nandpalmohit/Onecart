import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';
import loading from '../../../assets/gif/loading.gif'


const CategoryProducts = (props) => {
  const filterData = [];
  const [Alert, setAlert] = useState(true);

  let counter = 0;

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 1000);
  }, []);

  const filteredPr = props.apiResponse.products ? props.apiResponse.products.map((pr) => {
    pr.categories.filter((ct) => ct.id === props.locatedCt.id && (counter = counter + 1, filterData.push(pr)))
  }) : '';







  return (
    <div className='hi'>
      {Alert ? (<div className='text-center'>
        <img src={loading} alt="" width="200px" />
      </div>) : (<SingleProduct pr={filterData} counter={counter} locatedCt={props.locatedCt} /> )}
      
    </div>
  );
}

export default CategoryProducts;