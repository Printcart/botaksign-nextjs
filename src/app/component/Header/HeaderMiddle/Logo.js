import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col } from 'react-bootstrap';
import LogoBotak from '../../../../../public/Botak-Logo_v3.png';


const logo = {
    src: `${LogoBotak?.src}`,
    alt: 'Botak Logo'
  };
const Logo = () => {
  return (
    <Col className="logoheader">
      <div className="logowrapper">
        <div className="mainlogo">
          <Link href="/">
            <Image src={logo?.src} width={230} height={80} alt={logo?.alt} />
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Logo;
