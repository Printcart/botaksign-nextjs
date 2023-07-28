'use client';
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './page.module.css';
import Link from 'next/link';

const ArchiveProduct = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <Container className={styles.archiveProduct}>
        <Row>
          <Col lg={3}>
            <h5>PRINTING PRODUCTS</h5>
          </Col>
          <Col lg={9}>
            <ShopAction />
            <Products />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const ShopAction = () => {
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

const Products = () => {
  return (
    <>
      <Row className={styles.product}>
        <Col lg={4} md={4} xs={6} className={styles.propducCol}>
          <Card className={styles.propductItem}>
            <Card.Img
              variant="top"
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2022/04/invitation_cards_v1.jpg"
            />
            <Card.Body className={styles.contentItem}>
              <Link href="#">
                <Card.Title className={styles.titleItem}>Card Title</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} xs={6} className={styles.propducCol}>
          <Card className={styles.propductItem}>
            <Card.Img
              variant="top"
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2022/04/invitation_cards_v1.jpg"
            />
            <Card.Body className={styles.contentItem}>
              <Link href="#">
                <Card.Title className={styles.titleItem}>Card Title</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} xs={6} className={styles.propducCol}>
          <Card className={styles.propductItem}>
            <Card.Img
              variant="top"
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2022/04/invitation_cards_v1.jpg"
            />
            <Card.Body className={styles.contentItem}>
              <Link href="#">
                <Card.Title className={styles.titleItem}>Card Title</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} xs={6} className={styles.propducCol}>
          <Card className={styles.propductItem}>
            <Card.Img
              variant="top"
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2022/04/invitation_cards_v1.jpg"
            />
            <Card.Body className={styles.contentItem}>
              <Link href="#">
                <Card.Title className={styles.titleItem}>Card Title</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

const SelectFilter = () => {
  return (
    <div className={styles.select}>
      <Form.Select aria-label="Default select example">
        <OptionSelect />
      </Form.Select>
    </div>
  );
};

const OptionSelect = () => {
  return (
    <>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </>
  );
};

export default ArchiveProduct;
