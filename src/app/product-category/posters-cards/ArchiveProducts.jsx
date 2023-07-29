'use client';
import { SelectFilter } from 'botak/app/components/SelectFilter';
import { Col, Container, Row } from 'react-bootstrap';
import { Products } from './[product]';
import styles from './page.module.css';

const ArchiveProducts = (props) => {
  const { data, datacc } = props;
  console.log(datacc);
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


