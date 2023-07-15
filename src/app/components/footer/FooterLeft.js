import Image from 'next/image';
import React from 'react';
import imagefooter from '../../../../public/botak-logo_v3-2.png';
import { footerLinks } from '../../../../constant';
import FooterDescripton from './FooterDescripton';

const FooterLeft = () => {
  return (
    <>
      <div className="col-lg-4 col-md-12 col-sm-12 border-end ">
        <div className="image-footer">
          <Image
            width={157}
            height={56}
            alt="image footer"
            src={imagefooter}
            className="mb-4"
          />
        </div>

        {footerLinks.map((item, index) => {
          if (item) {
            return <FooterDescripton key={index} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default FooterLeft;
