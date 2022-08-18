import React from 'react';
import style from '../Product.module.css';

const ProductHeader = (props) => {
  return (
    <>
      <h3 className="card-title bold-600">{props.pr.name}</h3>
      <p className={`${style.review_star}`}>
        <span><i className="fas fa-star"></i></span>
        <span><i className="fas fa-star"></i></span>
        <span><i className="fas fa-star"></i></span>
        <span><i className="fas fa-star"></i></span>
        <span><i className="fas fa-star"></i></span>
        <span className='txt-primary ms-1'>(0)</span>
        <span className='txt-default'> • </span>
        {props.pr.is_in_stock ? <span className='text-success'>In stock</span>
          : <span className='text-danger'>Out of stock</span>}
      </p>
      <p className="card-text text-muted mt-2">{props.pr.short_description}</p>
    </>
  );
}

export default ProductHeader;