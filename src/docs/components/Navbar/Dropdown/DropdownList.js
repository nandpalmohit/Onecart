import React, { useState } from 'react';
import NestedList from './NestedList';
import style from './DropdownList.module.css';

const DropdownList = (props) => {
  // map category to get multiple categories

  const list = props.category;



  return (
    <div className={`category ${style.category}`}>
      <div className='row'>
        {list.categories.map(ct => {
          return ct.items.length !== 0 && ct.items.map((el, index) => {
            return <NestedList el={el} index={index} key={index} setDropDown={props.setDropDown} />
          })
        }
        )}
      </div>
    </div>
  );
}

export default DropdownList;