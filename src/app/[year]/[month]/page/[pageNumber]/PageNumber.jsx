'use client';
import { fetchBlog } from 'botak/api/pages';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination } from '../../Archives';
import styles from './PageNumber.module.css';

const TitleWrap = (props) => {
  const { month, year, pageNumber } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href={`/${year}/${month}`}>
        <span>{year}</span>
        <span>/</span>
        <span>{month}</span>
      </Link>
      <span>/</span>
      <strong>Page {pageNumber}</strong>
    </nav>
  );
};

const PageNumber = (props) => {
  const { dataTitleBlogSidebar, dataCategories, month, year, dataDate, pageNumber } =
    props;
  const { dataPosts, totalPages, totalPosts } = dataDate;
  const [archives, setArchives] = useState([]);
  const [hasPostsData, setHasPostsData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', year, month, pageNumber, 4);
      setArchives(result);
      setHasPostsData(true);
    };

    fetchData();
  }, [year, month, pageNumber]);

  return (
    <Container>
      <TitleWrap month={month} year={year} pageNumber={pageNumber} />
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
              <Post data={archives?.dataPosts} />
              <Pagination
                year={year}
                month={month}
                totalPages={totalPages}
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
