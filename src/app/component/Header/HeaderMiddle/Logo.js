import { headerData } from 'botak/app/constant';
import Image from 'next/image';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

const Logo = () => {
  return (
    <Col className="logoheader">
      <div className="logowrapper">
        <div className="mainlogo">
          <Link href="/">
            <Image
              src={headerData?.logo?.src}
              width={230}
              height={80}
              alt={headerData?.logo?.title}
            />
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Logo;
