import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import Style from './BreadCrumb.module.css';


const BreadCrumb = (props) => {

  const location = useLocation();


  return (
    <div className='container my-3'>
      <nav>
        <ol className={`${Style.breadcrumb} breadcrumb`}>
          <li className="breadcrumb-item"><a href="#">{props.index}</a></li>
          <li className="breadcrumb-item"><Link to={`/categories/${props.prCtSlug}`}>{props.prCtName}</Link></li>
          <li className="breadcrumb-item"><Link to={`/categories/${props.prCtSlug}/${props.ctSlug}`} state={{ category: location.state.category, parentCategorySlug: location.state.prCtSlug, parentCategoryName: location.state.prCtName }}>{props.ctName}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{props.prName}</li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;