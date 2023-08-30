'use client';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sider from '../components/SiderPost/page';

const Category = (props) => {
  const { data, dataccc, dataBlog, dataCategories } = props;
  console.log(dataccc);
  return (
    <Container>
      <Row >
        <Col lg={3}>
          <Sider dataCategories={dataCategories} dataBlog={dataPosts} />
        </Col>
        <Col lg={9}>cc</Col>
      </Row>
    </Container>
  );
};

export default Category;
