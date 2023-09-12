import { fetchDataFooterTitle } from 'botak/api/homepage';
import React from 'react';
import Footer from './page';

const FooterServer = async () => {
  const dataFooter = await fetchDataFooterTitle();
  return (
    <div>
      <Footer dataFooter={dataFooter} />
    </div>
  );
};

export default FooterServer;
