import React from 'react';

import SelectInput from './Inputs/SelectInput';
import CheckboxInput from './Inputs/CheckboxInput';
import InputLabel from './Inputs/InputLabel';

import style from '../Product.module.css';

const ProductOption = (props) => {
  return (
      <div className={`${style.options}`}>
        {props.pr.options.map((attr) => {
          return (
            <div className="row align-items-center my-3" key={attr.id}>
              {attr && <InputLabel labelName={attr.name} />}
                {attr.type == 'dropdown' && (<SelectInput attr={attr} options={props.options} setOptions={props.setOptions} />)}
                {attr.type == 'checkbox_custom' && (<CheckboxInput type="radio" attr={attr} options={props.options} setOptions={props.setOptions} />)}
                {attr.type == 'radio' && (<CheckboxInput type="radio" attr={attr} options={props.options} setOptions={props.setOptions} />)}
            </div>
          )
        })}
      </div>
  );
}

export default ProductOption;