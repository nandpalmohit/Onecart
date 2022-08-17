import React, { useEffect, useState } from 'react';
import style from './CategoryNavbar.module.css';
import ui from '../../ui/hover-animation.module.css';
import DropdownList from './Dropdown/DropdownList';
import { Link } from 'react-router-dom';
// props by layout/CmpNavbar
const CategoryNavbar = (props) => {

  const [dropDown, setDropDown] = useState(false);



  const links = props.links;
  const anchorTag = links.map((data) =>
    <Link  key={data.slug} to={data.slug} className={`${style.nav_link} ${ui.nav_link}`} >{data.name}</Link>
  )

  function handleDropdown(e) {
    e.preventDefault();
    if (dropDown == false) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }

  return (
    <div className={`container-fluid ${style.categorybox}`}>
      <div className='row'>
        <div className='col-sm-3'>
          
          <div className="dropdown">
            <a className={`${style.nav_link} ${ui.nav_link} btn btn-white btn-sm text-uppercase dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleDropdown}>
              Category
            </a>
          </div>
        </div>
        <div className='col-sm-6'>
          {anchorTag}
        </div>
        <div className='col-sm-3'>
          <span className={`${style.nav_span}`}>{props.title}</span>
        </div>
      </div>
      {dropDown ? <DropdownList category={props.apiResponse} setDropDown={setDropDown} /> : ''}
    </div>
  );
}

export default CategoryNavbar;