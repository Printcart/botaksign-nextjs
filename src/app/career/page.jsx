import React from 'react';
import Career from './Career';
import { fetchCareer } from 'botak/api/careersPage';

const CareerServer = async () => {
  const data = await fetchCareer();

  return <Career data={data} />;
};

export default CareerServer;
