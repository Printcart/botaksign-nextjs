'use client';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import styles from '../page.module.css';

const Header = () => {
  return (
    <div className="text-white transition">
      <header className="d-flex align-items-center justify-content-between">
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
      </header>
    </div>
  );
};
export default Header;
