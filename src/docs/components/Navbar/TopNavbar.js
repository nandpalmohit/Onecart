import React from 'react';
import style from './TopNavbar.module.css';

// props by layout/CmpNavbar
const TopNavbar = (props) => {
  return (
    <>
      <div className={`${style.container} px-4 py-2`}>
        <div className='row justify-content-end'>
          <div className='col-sm-4'>
            <p className='mb-0 font-sans'>{props.title}</p>
          </div>
          <div className={`col-sm-8 ${style.navbar_links} font-sans `}>
            <a href=""><i className="fa-solid fa-headphones-simple"></i> Contact</a>
            <a href=""><i className="fa-solid fa-eject"></i> About</a>
            <a href=""><i className="fa-solid fa-cart-flatbed"></i> Your cart</a>
            <a href=""><i className="fa-solid fa-arrow-right-to-bracket"></i> Login</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;