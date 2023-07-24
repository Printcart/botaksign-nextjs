import { Col, Container, Nav, Row } from 'react-bootstrap';
const HeaderTop = () => {
  return (
    <Container className="position-relative">
      <Row>
        <Col lg={6} md={12} sm={12}></Col>
        <Col lg={6} md={12} sm={12} className="d-flex justify-content-end">
          <Nav defaultActiveKey="/#" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/#" className="text-dark px-1 ">
                Register |
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/#" className="text-dark px-1">
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
