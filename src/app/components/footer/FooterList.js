import Link from 'next/link';
import React from 'react';
import FooterLink from './FooterLink';

const FooterList = ({ item, index }) => {
  return (
    <>
      <div
        key={`footer${index}`}
        className="col-lg-2 col-md-6 col-sm-12 justify-content-between"
      >
        <h3 className="mb-4 fs-1.7 footer-title">{item.title}</h3>
        <div className="d-flex flex-column ">
          <ul className="footer-list">
            {item?.links?.map((link, index) => (
              <FooterLink key={index} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterList;
