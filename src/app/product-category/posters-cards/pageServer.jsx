import { fetchArchiveProduct } from 'botak/api/homepage';
import React from 'react';
import ArchiveProduct from './page';

const pageServer = async () => {
  const data = await fetchArchiveProduct();
  console.log(data);
  return (
    <div>
      <ArchiveProduct data={data} />
    </div>
  );
};

export default pageServer;
