import { fetchArchiveProduct } from 'botak/api/homepage';
import React from 'react';
import ArchiveProduct from './page';

const pageServer = async () => {
  const data = await fetchArchiveProduct();
  return (
    <div>
      <ArchiveProduct data={data} />
    </div>
  );
};

export default pageServer;
