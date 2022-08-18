import React from 'react';
import empty from '../../../assets/gif/empty.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const SingleProduct = (props) => {

  const nullMsg = (
    <div className='text-center my-3'>
      <img src={empty} alt="" width="100px" />
      <h4 className='txt-muted bold-300 pt-3'>Oops! No product found.</h4>
    </div>
  );

  const location = useLocation();

  return (
    <div className='row'>
      {props.pr ? props.pr.map((el, index) => {
        return (
          <div className='col-sm-3 mb-3' key={index}>
            <div className="card pt-1" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
              <Link to={`${el.slug}`} state={{ product: el, category: props.locatedCt, prCtSlug: location.state.parentCategorySlug, prCtName: location.state.parentCategoryName }}>
                <img src={el.base_image.path} className="card-img-top" height="250px" alt="..." />
              </Link>
              <div className="card-body">
                <Link to={`${el.slug}`} state={{ product: el, category: props.locatedCt, prCtSlug: location.state.parentCategorySlug, prCtName: location.state.parentCategoryName }} className="text-decoration-none txt-secondary"><h5 className="card-title">{el.name}</h5></Link>
                {el.short_description && <p className="card-text">{el.short_description.substring(0, 120) + '...'}</p>}
                {el.is_in_stock ? <span className='text-success'>In stock</span>
                  : <span className='text-danger'>Out of stock</span>}
              </div>
            </div>
          </div>
        )
      })
        : ''}
      {props.counter == 0 && nullMsg}
    </div>
  );
}

export default SingleProduct;