'use client';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styles from './archiveProducts.module.css';
import { Products } from 'botak/app/components/Products/page';

const ArchiveProducts = (props) => {
  const { data } = props;
  return (
    <>
      <Container className={styles.archiveProduct}>
        <Row>
          <Col lg={3}>
            <h5>PRINTING PRODUCTS</h5>
          </Col>
          <Col lg={9}>
            <ShopAction />
            <Products data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArchiveProducts;

export const ShopAction = () => {
  return (
    <>
      <Row className={styles.shopAction}>
        <Col lg={6} md={6} xs={6} className={styles.title}>
          <h1>Posters & Cards</h1>
        </Col>
        <Col lg={6} md={6} xs={6}>
          <SelectFilter />
        </Col>
      </Row>
    </>
  );
};

export const SelectFilter = () => {
  return (
    <div className={styles.select}>
      <Form.Select aria-label="Default select example">
        <OptionSelect />
      </Form.Select>
    </div>
  );
};

export const OptionSelect = () => {
  return (
    <>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </>
  );
};
