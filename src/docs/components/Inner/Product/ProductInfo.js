import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import ProductHeader from './Sections/ProductHeader';
import ProductQty from './Sections/ProductQty';
import ProductChoice from './Sections/ProductChoice';
import ProductOption from './Sections/ProductOption';
import ProductCategories from './Sections/ProductCategories';
import ProductSpecs from './Sections/ProductSpecs';
import { useLocation } from 'react-router-dom';
import style from './Product.module.css';

const ProductInfo = (props) => {

  const [options, setOptions] = useState([]);

  const location = useLocation();
  const prQuantity = useSelector((state) => state.prQuantity);

  const prTotalPrice = useSelector((state) => state.totalPrice);

  useEffect(() => {
    parseFloat(localStorage.setItem('prPrice', location.state.product.price.amount));
    localStorage.setItem('prName', location.state.product.name);
    parseFloat(localStorage.setItem('prTotalPrice', prTotalPrice));
    parseFloat(localStorage.setItem('prQuantity', prQuantity));
  });





  return (
    <>
      {props.pr && (
        <div className="card border-0">
          <div className="card-body">
            <ProductHeader pr={props.pr} />
            <ProductChoice />
            <hr className={`${style.hr}`} />
            <h3 className='txt-dark bold-700'>{props.pr.formatted_price}</h3>
            <ProductOption pr={props.pr} options={options} setOptions={setOptions} />
            <ProductQty stock={props.pr.is_in_stock} options={options} setOptions={setOptions} productCallback={props.productCallback} />
            <hr className={`${style.hr}`} />
            <small className='txt-dark'>SKU: {props.pr.sku ? <span className='txt-secondary'>{props.pr.sku}</span> : <span className='txt-secondary'>Not available</span>}</small>
            <ProductCategories categories={props.pr.categories} />
            <hr className={`${style.hr}`} />
            <ProductSpecs specs={props.pr.attributes} />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductInfo;