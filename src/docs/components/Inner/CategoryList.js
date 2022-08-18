import React, { useState, useEffect } from 'react';
import style from './CategoryList.module.css';
import { Link } from 'react-router-dom';
import ui from '../../ui/hover-animation.module.css';
import { useLocation } from 'react-router-dom';

const CategoryList = (props) => {

  const location = useLocation();
  const [List, setList] = useState(false);



  useEffect(() => {
    props.el.name == location.state.parentCategoryName && setList(true);

  }, []);

  const showCtList = () => {
    List === false ? setList(true) : setList(false)
  }

  const active = List ? 'block' : 'none';


  return (
    <>
      <ul className={`${style.ul}`}>
        <li key={props.index} className={`${style.li}`}><h6 className={`${style.subtitle} bold-600`} onClick={showCtList}>{props.el.name}</h6></li>
        {props.el.items.length !== 0 ? props.el.items.map((i, index) => {
          return (
            <li key={index} className={`${style.li}`} style={{ display: `${active}` }}>
              <Link state={{ category: i, parentCategorySlug: props.el.slug, parentCategoryName: props.el.name }} to={`/categories/${props.el.slug}/${i.slug}`} className={`${ui.nav_link} ms-2 ${i.name == location.state.category.name ? 'txt-secondary' : 'txt-muted'} `} >
                {i.name}
              </Link>
            </li>
          )
        }) : <li className={`${style.li}`} style={{ display: `${active}` }}><a className={`${style.nav_link} ms-2`}>no items</a></li>}
      </ul>
    </>
  );
}

export default CategoryList;