import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import style from './BreadCrumb.module.css';


const BreadCrumb = (props) => {

  const location = useLocation();

  return (
    <div className='px-4 mt-4 mb-1'>
      <div className='row '>
        <div className='col-sm-6'>
          <h4 className='mb-0'>{props.title}</h4>
        </div>
        <div className='col-sm-6'>
          <nav className={`${style.nav_breadcrumb}`}>
            <ol className={`${style.breadcrumb} breadcrumb justify-content-end`}>
              <li className="breadcrumb-item"><Link to='/'>{props.index}</Link></li>
              {props.prCtName && <li className="breadcrumb-item"><Link to={`/categories/${props.prCtSlug}`}>{props.prCtName}</Link></li>}
              {props.ctName && <li className="breadcrumb-item"><Link to={`/categories/${props.prCtSlug}/${props.ctSlug}`} state={{ category: location.state.category, parentCategorySlug: location.state.parentCategorySlug, parentCategoryName: location.state.parentCategoryName }}>{props.ctName}</Link></li>}
              {props.prName && <li className="breadcrumb-item active" aria-current="page">{props.prName}</li>}
            </ol>
          </nav>
        </div>

      </div>

    </div>
  );
}

export default BreadCrumb;