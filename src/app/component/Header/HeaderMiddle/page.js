import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Logo from './Logo';
import Search from './Search';
import Cart from './Cart';

const HeaderMiddle = () => {
  return (
    <Container>
      <Row>
        <Logo />
        <Search />
        <Cart />
      </Row>
    </Container>
  );
};

export default HeaderMiddle;
