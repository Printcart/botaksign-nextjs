'use client';
import { footerLinks } from 'botak/app/constant';
import FooterBottom from './FooterBottom';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import styles from './footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  const { copyright, descriptons } = footerLinks;
  return (
    <div className={styles.footer}>
      <Container className={styles.footerTop}>
        <Row>
          <Col lg={4} md={12} sm={12} className="border-end">
            <FooterLeft descriptons={descriptons} />
          </Col>
          <Col lg={8} md={12} sm={12}>
            <Row>
              {footerLinks.linkMenu &&
                footerLinks.linkMenu.map((item, index) => {
                  return <FooterRight item={item} key={`index${index}`} />;
                })}
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterBottom copyright={copyright} />
    </div>
  );
};

export default Footer;
