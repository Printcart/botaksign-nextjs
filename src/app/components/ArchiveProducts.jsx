'use client';
import { fetchArchiveProductId } from 'botak/api/homepage';
import { Products } from 'botak/app/components/Products/page';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Loading from './Loading';
import ProductCategory from './ProductCategory';
import styles from './archiveProducts.module.css';

const ArchiveProducts = (props) => {
  const { dataProduct } = props;
  const params = useParams();
  const [data, setData] = useState(dataProduct.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const [hasMore, setHasMore] = useState(true);
  const alementRef = useRef(null);

  const onIntersect = async (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      let resData = await fetchArchiveProductId(params.id, currentPage, limit);
      if (resData.data.length === 0) {
        setHasMore(false);
      } else {
        setData((pre) => [...pre, ...resData.data]);
        setCurrentPage((pre) => pre + 1);
      }
    }
  };
  const observer = new IntersectionObserver(onIntersect);

  useEffect(() => {
    if (observer && alementRef.current) {
      observer.observe(alementRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [data]);

  return (
    <>
      <Container className={styles.archiveProduct}>
        <Row>
          <Col lg={3}>
            <h5>PRINTING PRODUCTS</h5>
            <ProductCategory />
          </Col>
          <Col lg={9}>
            <ShopAction data={data} />
            <Products data={data} />
            {hasMore && (
              <div className={styles.loading} ref={alementRef}>
                <Loading />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArchiveProducts;

export const ShopAction = (props) => {
  const { data } = props;

  const categoryName =
    data.length > 0 && data[0].categories.length > 0
      ? data[0].categories[0].name
      : 'No Product';

  return (
    <>
      <Row className={styles.shopAction}>
        <Col lg={6} md={6} xs={6} className={styles.title}>
          <h1>{categoryName}</h1>
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
