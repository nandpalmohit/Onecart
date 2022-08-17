import React from 'react';
import { Link } from 'react-router-dom';

import style from './Product.module.css';

const ProductInfo = (props) => {
  console.log(props.pr);

  return (
    <>
    {props.pr && (
      <div className="card border-0">
        <div className="card-body">
          <h3 className="card-title bold-600">{props.pr.name}</h3>
          <p className="card-text text-success">{props.pr.is_in_stock && ('In stock')}</p>
          <p className="card-text text-muted">{props.pr.short_description}</p>
          <a href='' className={`${style.link}`}>
            <span className='pe-3'><i className="fas fa-heart me-1"></i> Wishlist</span></a>
            <a href='' className={`${style.link}`}>
            <span className='ps-3'><i className="fas fa-exchange-alt me-1"></i> Compare</span></a>
          <hr className={`${style.hr}`} />
          <h3 className='txt-dark bold-700'>{props.pr.formatted_price}</h3>
        </div>
      </div>
    )}
    </>
  );
}

export default ProductInfo;