import React from 'react';
import styles from './headerTop.module.css';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const HeaderTop = () => {
  return (
    <Container className="position-relative mx-auto px-5">
      <Row>
        <Col className="d-flex justify-content-end">
          <Nav defaultActiveKey="/#" as="ul">
            <Nav.Item as="li">
              <Nav.Link
                href="/#"
                className={`text-muted px-1 sizeheader ${styles.sizeheader}`}
              >
                Register |
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                href="/#"
                className={`text-muted px-1 sizeheader ${styles.sizeheader}`}
              >
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderTop;
