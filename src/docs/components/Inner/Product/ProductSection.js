import React from 'react';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';

const ProductSection = (props) => {



  return (
    <div className='container-fluid'>
      <div className='row my-5'>
        <div className='col-sm-5'>
          {props.apiResponse && <ProductImg thumbImages={props.apiResponse.files} baseImg={props.apiResponse.base_image} />}
        </div>
        <div className='col-sm-5'>
          <ProductInfo pr={props.apiResponse} />
        </div>
      </div>
    </div>
  );
}

export default ProductSection;