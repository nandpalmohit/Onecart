import React, { Fragment, useEffect, useState } from 'react';
import CmpHeader from './CmpHeader';
import CmpNavbar from './CmpNavbar';
import CmpSection from './CmpSection';
import { apiProducts } from '../api/apiLinks';
import axios from 'axios';

const CmpIndex = () => {


  return (
    <Fragment>
      <CmpNavbar />
      <CmpHeader />
      <CmpSection />
    </Fragment>
  );
}

export default CmpIndex;