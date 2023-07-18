'use client';
import { footerLinks } from 'botak/app/constant';
import FooterBottom from './FooterBottom';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import styles from './page.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Fragment } from 'react';

const Footer = () => {
  const { copyright, descriptons } = footerLinks;
  return (
    <div className={styles.footer}>
      <Container className={styles.footerTop}>
        <Row>
          <Col lg={4} md={12} sm={12} className={styles.footerLeft}>
            <FooterLeft descriptons={descriptons} />
          </Col>
          <Col lg={8} md={12} sm={12} className={styles.footerRights}>
            <Row>
              {footerLinks.linkMenu &&
                footerLinks.linkMenu.map((item, index) => {
                  return (
                    <Fragment key={`index${index}`}>
                      <Col lg={4} md={12} sm={12}>
                        <FooterRight item={item} />
                      </Col>
                    </Fragment>
                  );
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
