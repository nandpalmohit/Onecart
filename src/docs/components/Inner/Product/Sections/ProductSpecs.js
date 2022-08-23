import React from 'react';

const ProductSpecs = (props) => {
  return (
    <>
      <h6 className="bold-700 pt-2">Specifications</h6>
      <div className="card">
        <div className="card-body">
          {props.specs && props.specs.map((sp, index) => {
            return (
              <div className='row' key={index}>
                <div className='col-sm-4'>
                  <p className='bold-500' style={{ fontSize: '14px' }}>{sp.name}</p>
                </div>
                <div className='col-sm-8'>
                  {sp.values ? sp.values.map((el, index) => {
                    return <p className='bold-400 txt-muted d-inline-block' style={{ fontSize: '14px' }} key={index}>{index !== 0 && ','} {el.value}</p>
                  }) : ''}
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </>
  );
}

export default ProductSpecs;