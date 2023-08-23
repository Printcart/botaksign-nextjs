'use client';

import Link from 'next/link';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import styles from './header.module.css';

const HeaderTop = () => {
  return (
    <Container className="position-relative">
      <Row>
        <Col lg={6} md={12} sm={12}></Col>
        <Col lg={6} md={12} sm={12} className="d-flex justify-content-end pt-1">
          <Nav defaultActiveKey="/#" as="ul">
            <Nav.Item as="li" className={styles.borderAccount}>
              <Link
                href="/my-account"
                className={`${styles.linkAccount} text-dark px-1 text-decoration-none`}
              >
                <span className="text-dark">Register</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                href="/my-account"
                className={`${styles.linkAccount} text-dark px-1 text-decoration-none`}
              >
                <span className="text-dark">Login</span>
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderTop;
