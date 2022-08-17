import React from 'react';
import empty from '../../../assets/gif/empty-secondary.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const SingleProduct = (props) => {

  const nullMsg = (
    <div className='text-center'>
      <img src={empty} alt="" width="100px" />
      <h3 className='txt-secondary'>Oops! No product found.</h3>
    </div>
  );

  const location = useLocation();

  return (
    <div className='row'>
      {props.pr ? props.pr.map((el, index) => {
        return (
          <div className='col-sm-3' key={index}>
            <div className="card">
              
              <Link to={`${el.slug}`} state={{ product: el, category: props.locatedCt, prCtSlug: location.state.parentCategorySlug, prCtName: location.state.parentCategoryName }}><img src={el.base_image.path} className="card-img-top" alt="..." /></Link>
              <div className="card-body">
              <Link to={`${el.slug}`} state={{ product: el, category: props.locatedCt, prCtSlug: location.state.parentCategorySlug, prCtName: location.state.parentCategoryName }} className="text-decoration-none txt-secondary"><h5 className="card-title">{el.name}</h5></Link>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h6 href="#" className="btn btn-primary">{el.formatted_price}</h6>
                <small className='stock'>{el.in_stock}</small>
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