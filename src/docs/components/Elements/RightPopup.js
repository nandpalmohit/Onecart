import React from 'react';
import style from './RightPopup.module.css';

const RightPopup = (props) => {
  return (
    <div className={`${style.alert}`}>
      <div className={`${style.cartItem}`}>
        {props.alertMsg}
      </div>
      {props.alertBasket &&
        <div className={`${style.cartTotal}`}>
          {props.success == true ? ('Basket') : ('Price')}
          <i className="fas fa-indian-rupee-sign ms-2 me-1"></i>
          {props.alertBasket}
        </div>
      }
    </div>
  );
}

export default RightPopup;