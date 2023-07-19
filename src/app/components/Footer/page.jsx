'use client';
import { footerLinks } from 'botak/app/constant';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterBottom from './FooterBottom';
import FooterLeft from './FooterLeft';
import FooterList from './FooterList';
import styles from './page.module.css';

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
                        <FooterList item={item} />
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
