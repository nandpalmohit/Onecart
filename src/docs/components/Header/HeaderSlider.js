import React from 'react';

const HeaderSlider = () => {

  return (
    <div className='container-fluid my-5'>
      <div className='row mb-2'>
        <div className='col-sm-4'>
          <div className='row mb-2'>
            <div className='col-sm-12'>
              <img src='../../assets/banner/1.webp' className='shadow border' width="100%" alt="" />
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <img src='../../assets/banner/2.webp' className='shadow border' width="100%" alt="" />
            </div>
            <div className='col-sm-6'>
              <img src='../../assets/banner/3.webp' className='shadow border' width="100%" alt="" />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-12'>
              <img src='../../assets/banner/4.webp' className='shadow border' width="100%" alt="" />
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='row mb-2'>
            <div className='col-sm-12'>
              <img src='../../assets/banner/5.webp' className='shadow border' width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlider;