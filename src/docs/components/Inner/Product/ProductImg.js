import React, { useState } from 'react';
import style from './Product.module.css';


const ProductImg = (props) => {

  const [fullImg, setFullImg] = useState([]);


  return (
    <div className='row'>
      <div className='col-sm-3'>
        {props.thumbImages ? (props.thumbImages.map((el, index) => {
          return <img src={el.path} className={`${style.thumb_border}`} key={index} onClick={() => setFullImg(el)} width="100px" alt="" />
        })
        ) : ''}
      </div>
      <div className='col-sm-9'>
        {fullImg.length === 0
          ? (<img src={props.baseImg.path} className={`${style.img_border}`} width="100%" alt="" />)
          : (<img src={fullImg.path} className={`${style.img_border}`} width="100%" alt="" />)}
      </div>
    </div>
  );
}

export default ProductImg;