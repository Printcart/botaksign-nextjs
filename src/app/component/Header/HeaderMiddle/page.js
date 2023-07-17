import { headerData } from 'botak/app/constant';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from './Cart';
import Logo from './Logo';
import Search from './Search';

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
