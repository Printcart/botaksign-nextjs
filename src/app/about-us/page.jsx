import React from 'react';
import AboutUs from './AboutUs';
import { fetchAboutUS } from 'botak/api/aboutUspage';

const AboutUsServer = async () => {
  const data = await fetchAboutUS();
  return <AboutUs data={data} />;
};

export default AboutUsServer;
