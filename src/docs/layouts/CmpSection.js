import React, { useEffect, useState } from 'react';
import ShopByCategory from '../components/Section/ShopByCategory';


const CmpSection = () => {

  const [apiData, setApiData] = useState([]);


  

  const title = 'Shop by category';
  const desc = 'Last Month upto 1500+ Products Sales From this catagory. You can choose a product from here and save money.';


  return (
    <React.Fragment>
        <ShopByCategory title={title} desc={title} apiData='null' />
        
    </React.Fragment>
  );
}

export default CmpSection;