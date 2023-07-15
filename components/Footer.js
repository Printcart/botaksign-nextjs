import React from 'react';
import { footerLinks, introduceFooter } from '../constant/index';
import Link from 'next/link';
import Image from 'next/image';
import imagefooter from '../public/botak-logo_v3-2.png';

const Footer = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-4 col-md-12 col-sm-12 border-end ">
          <Image
            width={157}
            height={56}
            alt="image footer"
            src={imagefooter}
            className="mb-4"
          />
          {introduceFooter.map((item, index) => (
            <div key={`index${index}`} className="pe-5">
              <p className=" fs-6">{item?.year}</p>
              <p className=" fs-6">{item?.descripton}</p>
            </div>
          ))}
        </div>
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className="col-lg-2 col-md-6 col-sm-12 justify-content-between"
          >
            <h3 className="mb-4 fs-1.7 ">{item.title}</h3>
            <div className="d-flex flex-column ">
              {item?.links?.map((link) => (
                <Link key={link.title} href={link.url} className="mt-3 fs-0.6">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-end">
        <p className="fs-6">© Copyright 2021 Botak Sign Pte Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
