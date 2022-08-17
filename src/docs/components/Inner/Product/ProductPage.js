import React from 'react';
import BreadCrumb from '../../Elements/BreadCrumb';
import ProductSection from './ProductSection';
import { useLocation } from 'react-router';


const ProductPage = (props) => {

  const location = useLocation();


  return (
    <React.Fragment>
      <BreadCrumb index="Home" ctName={location.state.category.name} ctSlug={location.state.category.slug} prName={location.state.product.name} prSlug={location.state.product.slug} prCtName={location.state.prCtName} prCtSlug={location.state.prCtSlug} />
      <ProductSection apiResponse={props.apiResponse.products} />
    </React.Fragment>
  );
}

export default ProductPage;