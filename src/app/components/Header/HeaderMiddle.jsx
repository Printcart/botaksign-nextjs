import { headerData } from 'botak/app/data/menus';
import { Col, Container, Form, InputGroup, Nav, Row } from 'react-bootstrap';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import FontIcon from '../FontIcon';

const Logo = ({ headerData }) => {
  return (
    <div className="logowrapper">
      <div className="mainlogo">
        <Link href="/">
          <Image
            src={headerData?.logo?.src}
            width={230}
            height={80}
            alt={headerData?.logo?.title}
          />
        </Link>
      </div>
    </div>
  );
};

export const Search = () => {
  return (
    <div
      className="searchform d-flex w-100 align-items-center"
      style={{ height: '46px' }}
    >
      <Form className="w-100 h-100">
        <InputGroup
          size="lg"
          className="searchform w-100 d-flex align-items-center  h-100"
        >
          <Col xs={10} className="d-inline-block  h-100">
            <Form.Control
              className="h-100 rounded-start-pill ps-3 shadow-none lh-base m-0 bg-transparent text-secondary"
              type="text"
              id="inputData"
              placeholder="Search"
            />
          </Col>
          <Col xs={2} className="h-100">
            <InputGroup.Text
              type="submit"
              className="h-100 lh-base m-0 rounded-end-pill position-relative bg-transparent text-secondary justify-content-center"
            >
              Search
            </InputGroup.Text>
          </Col>
        </InputGroup>
      </Form>
    </div>
  );
};
const Cart = () => {
  return (
    <div className="cartheadwrapper d-inline-block position-relative">
      <div className="cartwrapper d-flex align-items-center">
        <div className="iconcart text-success px-1 fs-2">
          <FontIcon
            prefix={headerData?.icon?.prefix}
            iconName={headerData?.icon?.iconName}
          />
        </div>
        <div className="showcat position-relative text-start px-1">
          <span
            className="textcart d-block fw-medium text-secondary px-1"
            style={{ fontSize: '14px' }}
          >
            <span>Your Cart</span>
          </span>
          <span className="pricewrapper d-inline-block ">
            <span
              className="number text-start position-static bg-transparent text-secondary px-1 pe-2 text-uppercase"
              style={{ fontSize: '14px' }}
            >
              0 Item (s)
            </span>
            <span className="price d-inline-block ">
              <span className="amount fs-6 " style={{ color: '#21a65b' }}>
                <span className="curentprice" style={{ fontSize: '14px' }}>
                  SGD $0.00
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="statuscart"></div>
    </div>
  );
};
const HeaderTopMobile = () => {
  return (
    <Nav defaultActiveKey="/#" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/#" className={`text-muted px-1 ${styles.sizeheader}`}>
          Register |
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/#" className={`text-muted px-1 ${styles.sizeheader}`}>
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
const HeaderMiddle = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={3} className="logoheader">
          <Logo headerData={headerData} />
        </Col>
        <Col xs={6} className="search px-3">
          <Search />
        </Col>
        <Col
          xs={3}
          className="cart float-end text-end "
          style={{ cursor: 'pointer' }}
        >
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderMiddle;

export const HeaderMiddleMobile = () => {
  return (
    <Container className="position-relative">
      <Row className="row">
        <Col xs={6} sm={6} className="logoheader">
          <Logo headerData={headerData} />
        </Col>
        <Col
          xs={6}
          sm={6}
          className="headerTopRight pt-2 d-flex justify-content-end"
          style={{ cursor: 'pointer' }}
        >
          <HeaderTopMobile />
        </Col>
      </Row>
    </Container>
  );
};
