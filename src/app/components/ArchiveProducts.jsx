'use client';
import { fetchArchiveProductId } from 'botak/api/homepage';
import { Products } from 'botak/app/components/Products/page';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import ReactPaginate from 'react-paginate';
import Loading from './Loading';
import ProductCategory from './ProductCategory';
import styles from './archiveProducts.module.css';

const ArchiveProducts = (props) => {
  const { dataProduct } = props;
  const params = useParams();
  const [data, setData] = useState(dataProduct.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [totalPages, setTotalPages] = useState(+dataProduct.totalPages);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    let res = await fetchArchiveProductId(params.id, currentPage, limit);
    // if (res.data && res.data.length > 0) {

    setData(res.data);
    // }
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };
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
            <LazyLoad height={100} offset={100} placeholder={<Loading />}>
              <Products data={data} />
            </LazyLoad>
            <div className={styles.pagination}>
              {totalPages > 0 && (
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={totalPages}
                  previousLabel="< previous"
                  marginPagesDisplayed={2}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              )}
            </div>
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
