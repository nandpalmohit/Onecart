import React, { useCallback, useState } from 'react';

import CategoryProducts from './CategoryProducts';
import CategoryList from './CategoryList';
import loading from '../../../assets/gif/loading.gif';
import BreadCrumb from '../Elements/BreadCrumb';
import { useLocation } from 'react-router';
import style from './CategoryList.module.css';


const CategoriesPage = (props) => {

  const location = useLocation();

  return (
    <div className='container-fluid my-2'>
      <div className='row pt-3'>
        <div style={{ borderRight: '1px solid rgba(0,0,0,0.1)', width: '20%' }}>
          {props.category.length !== 0 ? props.category.categories.map(ct => {
            return ct.items.length !== 0 && ct.items.map((el, index) => {
              return (
                <ul className={`${style.ul}`} key={index}>
                  {index == 0 && <li className={`${style.li}`}><h6 className={`${style.title} bold-700`}>{ct.name}</h6></li>}
                  <CategoryList el={el} index={index} key={index} ct={ct} />
                </ul>
              )
            })
          }
          ) : ''}
        </div>
        <div style={{ width: "80%" }}>
          <BreadCrumb index="Home" title={location.state.category.name} ctName={location.state.category.name} ctSlug={location.state.category.slug} prCtName={location.state.parentCategoryName} prCtSlug={location.state.parentCategorySlug} />
          <CategoryProducts apiResponse={props.apiResponse} locatedCt={props.locatedCt} />
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;