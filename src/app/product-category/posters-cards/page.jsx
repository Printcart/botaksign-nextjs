import React from 'react';
import ArchiveProducts from './ArchiveProducts';
import { fetchArchiveProduct } from 'botak/api/homepage';

const ArchiveProductsServer = async () => {
  const data = await fetchArchiveProduct();
  return <ArchiveProducts data={data} />;
};
export default ArchiveProductsServer;
