import Link from 'next/link';
import React from 'react';
import { footerLinks } from '../../../../constant';
import FooterList from './FooterList';

const FooterRight = () => {
  return (
    <>
      {footerLinks.map((item, index) => {
        if (item.title && item.links) {
          return <FooterList key={index} item={item} />;
        } else {
          return <></>;
        }
      })}
    </>
  );
};

export default FooterRight;
