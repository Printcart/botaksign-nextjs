import { headerData } from 'botak/app/constant';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from './Cart';
import Logo from './Logo';
import Search from './Search';

const HeaderMiddle = () => {
  return (
    <Container>
      <Row>
        <Col className="logoheader">
          <Logo headerData={headerData} />
        </Col>
        <Col xs={6} className="search px-3 m-auto">
          <Search />
        </Col>
        <Col
          className="cart float-end text-end m-auto "
          style={{ cursor: 'pointer' }}
        >
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderMiddle;
