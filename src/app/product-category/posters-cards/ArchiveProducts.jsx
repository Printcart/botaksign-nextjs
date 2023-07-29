'use client';
import Link from 'next/link';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './page.module.css';

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

export const Products = (props) => {
  const { data } = props;

  return (
    <>
      <Row className={styles.product}>
        {data.length > 0 &&
          data.map((item) => (
            <Col key={item.id} lg={4} md={4} xs={6} className={styles.propducCol}>
              <Card className={styles.propductItem}>
                <Link href={item?.permalink}>
                  <Card.Img
                    variant="top"
                    src={
                      item?.images &&
                      'https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2022/04/invitation_cards_v1.jpg'
                    }
                  />
                </Link>
                <Card.Body className={styles.contentItem}>
                  <Link href={item?.permalink}>
                    <Card.Title className={styles.titleItem}>
                      {item?.name || ''}
                    </Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
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

export const SelectFilter = () => {
  return (
    <div className={styles.select}>
      <Form.Select aria-label="Default select example">
        <OptionSelect />
      </Form.Select>
    </div>
  );
};
