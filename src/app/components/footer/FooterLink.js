import Link from 'next/link';
import React from 'react';

const FooterLink = ({ link, index }) => {
  return (
    <>
      <li key={`index${index}`} className=" mb-2">
        <span className="link-icon"> {link.icon}</span>
        <Link href={link.url} className="footer-list">
          {link.title}
        </Link>
      </li>
    </>
  );
};

export default FooterLink;
