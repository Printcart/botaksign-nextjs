'use client';
import { Col, Container, Form, InputGroup, Nav, Row } from 'react-bootstrap';
import styles from '../page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LogoBotak from '../../../public/Botak-Logo_v3.png';

const Header = () => {
  return (
    <div className="text-white transition">
      <header className="header">
        <div>
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
        </div>
        <div>
          <Container>
            <Row>
              <Col className="logoheader">
                <div className="logowrapper">
                  <div className="mainlogo">
                    <Link href="/">
                      <Image
                        src={LogoBotak}
                        alt="Botak Logo"
                        width={230}
                        height={80}
                      />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={6} className="search px-3 m-auto">
                <div className="searchform d-flex w-100 align-items-center">
                  <Form className="w-100">
                    <InputGroup
                      size="lg"
                      className="searchform w-100 d-flex align-items-center"
                    >
                      <div
                        className="d-inline-block"
                        style={{ width: '88%', height: '46px' }}
                      >
                        <Form.Control
                          className=" h-100 rounded-start-pill ps-3 shadow-none lh-base m-0 bg-transparent fs-6"
                          type="text"
                          id="inputData"
                          placeholder="Search"
                        />
                      </div>
                      <InputGroup.Text
                        type="submit"
                        className="lh-base m-0 rounded-end-pill position-relative text-capitalize bg-transparent fs-6 px-1 text-secondary "
                        style={{ width: '12%', height: '46px' }}
                      >
                        Search
                      </InputGroup.Text>
                    </InputGroup>
                  </Form>
                </div>
              </Col>
              <Col className="cart"></Col>
            </Row>
          </Container>
        </div>
      </header>
    </div>
  );
};
export default Header;
