import { fetchDataFooterTitle } from 'botak/api/homepage';
import React from 'react';
import FooterContainer from './FooterContainer';

const Footer = async () => {
  const dataFooter = await fetchDataFooterTitle();
  return (
    <div>
      <FooterContainer dataFooter={dataFooter} />
    </div>
  );
};

export default Footer;
