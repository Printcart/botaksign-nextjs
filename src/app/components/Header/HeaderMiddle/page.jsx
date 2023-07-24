import { headerData } from 'botak/app/data/menus';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Cart from './Cart';
import Logo from './Logo';
import Search from './Search';
import styles from './headerMiddle.module.css';

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

const HeaderTopMobile = () => {
  return (
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
  );
};
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
