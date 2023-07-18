import { Col } from 'react-bootstrap';
import FooterList from './FooterList';

const FooterRight = ({ item }) => {
  return (
    <Col lg={4} md={12} sm={12}>
      <FooterList item={item} />
    </Col>
  );
};

export default FooterRight;
