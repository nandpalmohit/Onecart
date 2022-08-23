import React from 'react';

const InputLabel = (props) => {
  return (
    <div className="col-sm-4 col-md-4 col-lg-3">
      <label htmlFor="inputPassword6" className="col-form-label bold-600">{props.labelName}</label>
    </div>
  );
}

export default InputLabel;