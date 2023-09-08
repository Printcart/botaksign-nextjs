'use client';
import { fetchBlogRelated } from 'botak/api/pages';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination } from '../../Categories';
import styles from './PageNumber.module.css';

const TitleWrap = (props) => {
  const { slug, pageNumber } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href={`/categories/${slug}`}>{slug}</Link>
      <span>/</span>
      <strong>Page {pageNumber}</strong>
    </nav>
  );
};

const PageNumber = (props) => {
  const { pageNumber, slug, dataCate, id, dataCategories, dataTitleBlogSidebar } =
    props;
  const { totalPages } = dataCate;
  const [dataCa, setDataCate] = useState([]);
  const [hasPostsData, setHasPostsData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlogRelated(id, pageNumber, 4);
      setDataCate(result);
      result?.data?.length > 0 && setHasPostsData(true);
    };

    fetchData();
  }, [id, pageNumber]);

  return (
    <Container>
      <TitleWrap slug={slug} pageNumber={pageNumber} />
      <Row className="">
        <Col lg={3} className="p-3">
          <Sidebar
            dataTitleBlogSidebar={dataTitleBlogSidebar}
            dataCategories={dataCategories}
          />
        </Col>
        <Col lg={9} className="px-3">
          {hasPostsData ? (
            <>
              <Post data={dataCa?.data} />
              <Pagination
                totalPages={totalPages}
                slug={slug}
                currentPage={pageNumber}
              />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PageNumber;
