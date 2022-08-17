import React, { useState } from 'react';

import style from './DropdownList.module.css';
import ui from '../../../ui/hover-animation.module.css';
import { Link } from 'react-router-dom';

const NestedList = (props) => {

  return (
    <>
      <div className='col-sm-3' key={props.index}>
        <ul>
          <li key={props.index}><h6 className={`${style.ct_title} ${style.nav_link}`}>{props.el.name}</h6></li>
          {props.el.items.length !== 0 ? props.el.items.map((i, index) => {
            return <li key={index}><Link state={{ category: i, parentCategorySlug: props.el.slug, parentCategoryName: props.el.name }} to={`/categories/${props.el.slug}/${i.slug}`} className={`${ui.nav_link} ${style.nav_link} ms-4`} onClick={()=> props.setDropDown(false)}>{i.name}</Link></li>
          }) : <li><a className={`${style.nav_link_empty} ms-4`}>no items</a></li>}
        </ul>
      </div>
    </>);
}

export default NestedList;