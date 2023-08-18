import { fetchCareer } from 'botak/api/homepage';
import React from 'react';
import Career from './Career';

const CareerServer = async () => {
  const data = await fetchCareer();

  return <Career data={data} />;
};

export default CareerServer;
