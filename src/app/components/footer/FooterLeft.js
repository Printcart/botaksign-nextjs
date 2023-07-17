import Image from 'next/image';
import React from 'react';
import { footerLinks } from '../../constant';
import { Col, Container } from 'react-bootstrap';
import styles from './footer.module.css';
import FooterDescripton from './FooterDescripton';

const FooterLeft = () => {
  return (
    <>
      <Col className="col-lg-4 col-md-12 col-sm-12 border-end ">
        <Container className={styles.imageFooter}>
          <Image
            width={157}
            height={56}
            alt="image footer"
            src=""
            className="mb-4"
          />
        </Container>

        {footerLinks.map((item, index) => {
          return <FooterDescripton key={`index${index}`} item={item} />;
        })}
      </Col>
    </>
  );
};

export default FooterLeft;
