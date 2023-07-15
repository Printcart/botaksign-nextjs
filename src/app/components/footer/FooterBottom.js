import React from 'react';
import { footerLinks } from '../../../../constant';

const FooterBottom = () => {
  return (
    <>
      <div className="footer-botom">
        <div className="container d-flex justify-content-end">
          {footerLinks.map((item, index) => {
            return (
              <p key={`index${index}`} className="fs-6 copyright-footer">
                {item.copyright}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
