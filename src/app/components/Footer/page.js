'use client';
import FooterBottom from './FooterBottom';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import styles from './footer.module.css';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.footerTop}>
        <Row className="row d-flex justify-content-between">
          <FooterLeft />
          <FooterRight />
        </Row>
      </Container>
      <FooterBottom />
    </div>
  );
};

export default Footer;
