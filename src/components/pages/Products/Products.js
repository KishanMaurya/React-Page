import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour } from './Data';

function Products() {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;