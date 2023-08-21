'use client';
import { Products } from 'botak/app/components/Products/page';
import { useParams } from 'next/navigation';
import { Col, Container, Form, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';
import ProductCategory, { TitleCategory } from './ProductCategory';
import styles from './archiveProducts.module.css';

const ArchiveProducts = (props) => {
  const { data } = props;
  console.log('data product', data);
  return (
    <>
      <Container className={styles.archiveProduct}>
        <Row>
          <Col lg={3}>
            <h5>PRINTING PRODUCTS</h5>
            <ProductCategory />
          </Col>
          <Col lg={9}>
            <ShopAction />
            <LazyLoad height={100} offset={100} placeholder={<Loading />}>
              <Products data={data} />
            </LazyLoad>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArchiveProducts;

export const ShopAction = () => {
  const searchParams = useParams();
  // console.log(searchParams.id, 'searchParams ');
  return (
    <>
      <Row className={styles.shopAction}>
        <Col lg={6} md={6} xs={6} className={styles.title}>
          title
          <TitleCategory />
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
