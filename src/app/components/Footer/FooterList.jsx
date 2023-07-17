import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import FooterLink from './FooterLink';
import styles from './footer.module.css';

const FooterList = ({ item }) => {
  return (
    <Row className="w-100">
      <Col lg={4} md={12} sm={12} className={styles.footerLists}>
        <Form.Label className={styles.footerTitle}>{item.title}</Form.Label>
        <Row>
          <ListGroup className={styles.footerList}>
            {item?.links?.map((link, index) => (
              <FooterLink key={`${item.title}-${index}`} link={link} />
            ))}
          </ListGroup>
        </Row>
      </Col>
    </Row>
  );
};

export default FooterList;
