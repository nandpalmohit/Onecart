import React, {useState} from 'react';
import style from './ShopByCategory.module.css';

// props by layout/CmpSection
const ShopByCategory = (props) => {

  // const [categoryList, setcategoryList] = useState(false);

  // if(props.apiData != null)
  // setcategoryList(true);

  return (
    <>
      <section className={`${style.section} container-fluid`}>
        <div className='row'>
          <div className='col-sm-4'>
            <p className={`${style.section_title}`}>{props.title}</p>
            <p className={`${style.section_desc}`}>{props.desc}</p>
          </div>
          <div className='col-sm-8'>
            <div className='row'>
              {/* {props.shopCategoryList.category.map((list) =>
                <div className='col px-1' key={list.id}>
                  
                  <h6 className='mt-3 text-center' key={list.id}>{list.category_name}</h6>

                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopByCategory;