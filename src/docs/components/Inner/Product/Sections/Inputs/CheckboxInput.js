import React, { useState } from 'react';
import style from '../../Product.module.css'
import loading from '../../../../../../assets/gif/loading_black.gif'
import { type } from '@testing-library/user-event/dist/type';


const CheckboxInput = (props) => {

  const optionHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const newOptions = { optionName: name, optionValue: value }

    const data = props.options.filter((el) => { return el.optionName == name });
    data.length == 0 ? props.setOptions(old => [...old, newOptions]) : data[0].optionValue = value;
  }


  return (
    <div className='col-sm-8'>
      {props.attr ? props.attr.values.map((val, index) => {
        return (
          <div className={`${style.custom_checkbox}`} key={index}>
            <input type={props.type} className={`${style.checkbox_input}`} onChange={optionHandler} id={val.label} name={props.attr.name} value={val.label} />
            <label htmlFor={val.label}>{val.label}</label>
          </div>
        )
      }) : <img src={loading} alt="" width="100px" />}
    </div>
  );
}

export default CheckboxInput;