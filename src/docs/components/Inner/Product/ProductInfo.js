import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import ProductHeader from './Sections/ProductHeader';
import ProductChoice from './Sections/ProductChoice';


import style from './Product.module.css';

const ProductInfo = (props) => {
  console.log(props.pr);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const incrementQty = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  }

  const decreamentQty = (e) => {
    e.preventDefault();
    {
      quantity > 1 &&
      setQuantity(quantity - 1)
    }
  }



  return (
    <>
      {props.pr && (
        <div className="card border-0">
          <div className="card-body">
            <ProductHeader pr={props.pr}  />
            <ProductChoice />
            <hr className={`${style.hr}`} />
            <h3 className='txt-dark bold-700'>{props.pr.formatted_price}</h3>
            <div className={`${style.options}`}>
              {props.pr.options.map((attr) => {
                return (
                  <div className="row align-items-center my-3">
                    <div className="col-3">
                      <label htmlFor="inputPassword6" className="col-form-label bold-600">{attr.name}</label>
                    </div>
                    <div className="col-5">
                      {attr.type == 'dropdown' && (<select name={attr.name} className={`${style.custom_select} form-select`}>
                        <option value="" selected disabled>Choose an option</option>
                        {attr.values.map((val, index) => {
                          return <option value="">{val.label}</option>
                        })}
                      </select>)}
                    </div>
                  </div>
                )
              })}
            </div>

            <hr className={`${style.hr}`} />
            <p>Categories:
              {props.pr.categories.map((ct, index) => {
                return (
                  <small key={index}>{index !== 0 && ','} <span className="txt-secondary">{ct.name}</span></small>
                )
              })}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductInfo;