import { fetchDataFooterTitle } from 'botak/api/homepage';
import React from 'react';
import Footer from './page';

const FooterServer = async () => {
  const menusWithIdAndName = await fetchDataFooterTitle();
  return (
    <div>
      <Footer dataFooter={menusWithIdAndName} />
    </div>
  );
};

export default FooterServer;
