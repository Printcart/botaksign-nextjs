import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import styles from './footer.module.css';
import FooterLink from './FooterLink';

const FooterList = ({ item }) => {
  return (
    <>
      <Col className="col-lg-2 col-md-6 col-sm-12 justify-content-between">
        <Form.Label className={styles.footerTitle}>{item.title}</Form.Label>
        <Row className="d-flex flex-column ">
          <ListGroup className={styles.footerList}>
            {item?.links?.map((link, index) => (
              <FooterLink key={`${item.title}-${index}`} link={link} />
            ))}
          </ListGroup>
        </Row>
      </Col>
    </>
  );
};

export default FooterList;
