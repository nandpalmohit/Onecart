import React from 'react';
import style from '../Product.module.css';


const ProductChoice = () => {
  return ( 
    <>
    <hr className={`${style.hr}`} />
            <a href='' className={`${style.link}`}>
              <span className='pe-3'><i className="fas fa-heart me-1"></i> Wishlist</span></a>
            <a href='' className={`${style.link}`}>
              <span className='ps-3'><i className="fas fa-exchange-alt me-1"></i> Compare</span></a>
    </>
   );
}
 
export default ProductChoice;