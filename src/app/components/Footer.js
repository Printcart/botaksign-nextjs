import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '../../../constant/index';
import imagefooter from '../../../public/botak-logo_v3-2.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-top">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-4 col-md-12 col-sm-12 border-end ">
            <div className="imgae-footer">
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
                return (
                  <div key={`footer${index}`} className="pe-5">
                    <p className=" footer-descripton">{item?.year}</p>
                    <p className="footer-descripton">{item?.descripton}</p>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>

          {footerLinks.map((item, index) => {
            if (item.title && item.links) {
              return (
                <div
                  key={`footer${index}`}
                  className="col-lg-2 col-md-6 col-sm-12 justify-content-between"
                >
                  <h3 className="mb-4 fs-1.7 footer-title">{item.title}</h3>
                  <div className="d-flex flex-column ">
                    <ul className="footer-list">
                      {item?.links?.map((link, index) => (
                        <li key={`index${index}`} className=" mb-2">
                          <span className="link-icon"> {link.icon}</span>
                          <Link href={link.url} className="mt-3 fs-0.6 footer-list">
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
      <div className="footer-botom">
        <div className="container d-flex justify-content-end">
          <p className="fs-6 copyright-footer">
            © Copyright 2021 Botak Sign Pte Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
