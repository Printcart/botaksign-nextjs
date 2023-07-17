'use client';
import FooterBottom from './FooterBottom';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import styles from './footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.footerTop}>
        <Row>
          <Col lg={4} md={12} sm={12} className="border-end">
            <FooterLeft />
          </Col>
          <Col lg={8} md={12} sm={12}>
            <FooterRight />
          </Col>
        </Row>
      </Container>
      <FooterBottom />
    </div>
  );
};

export default Footer;
