import React from 'react';
import style from '../../Product.module.css'

const SelectInput = (props) => {

  const optionHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const newOptions = { optionName: name, optionValue: value }

    const data = props.options.filter((el) => {return el.optionName == name});
    data.length == 0 ? props.setOptions(old => [...old, newOptions]) : data[0].optionValue = value;
  }

  return (
    <div className='col-sm-8 col-md-8 col-lg-5'>
      <select name={props.attr.name} defaultValue="DEFAULT" className={`${style.custom_select} form-select`} onChange={optionHandler} >
        <option value="DEFAULT" disabled>Choose an option</option>
        {props.attr && props.attr.values.map((val, index) => {
          return <option value={val.label} key={index}>{val.label}</option>
        })}
      </select>
    </div>
  )
};

export default SelectInput;