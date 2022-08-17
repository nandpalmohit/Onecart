import React, { useCallback, useState } from 'react';

import CategoryProducts from './CategoryProducts';
import loading from '../../../assets/gif/loading.gif';

const CategoriesPage = (props) => {

  return (
    <div className='container mt-5'>
      <div className='row'>
        <CategoryProducts apiResponse={props.apiResponse} locatedCt={props.locatedCt} />
      </div>
    </div>
  );
}

export default CategoriesPage;