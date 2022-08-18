import React from 'react';

const ProductQty = () => {
  return (
      <div className="row align-items-center my-3">
        <div className="col-3">
          <label htmlFor="inputPassword6" className="col-form-label bold-600">Quantity</label>
        </div>
        <div className="col-5">
          <div className={`${style.button} btn-group`} role="group" aria-label="First group">
            <button type="button" className="btn btn-light" onClick={decreamentQty}><i class="fas fa-minus"></i></button>
            <button type="button" className="btn btn-light px-3"> {quantity} </button>
            <button type="button" className="btn btn-light" onClick={incrementQty}><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
  );
}

export default ProductQty;