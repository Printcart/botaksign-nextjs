'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchBlog } from 'botak/api/pages';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Archives.module.css';

const BreadCrumb = (props) => {
  const { month, year } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>
        <span>{year}</span>
        <span>/</span>
        <span>{month}</span>
      </strong>
    </nav>
  );
};

export const Pagination = (props) => {
  const { totalPages, currentPage, year, month } = props;

  return (
    <nav className={styles.pagination}>
      {currentPage > 1 && (
        <Link
          className={styles.newerArticles}
          href={
            currentPage === 1
              ? `${window.location.pathname}`
              : `/${year}/${month}/page/${+currentPage - 1}`
          }
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          Newer Articles
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          className={styles.olderArticles}
          href={`/${year}/${month}/page/${+currentPage + 1}`}
        >
          Older Articles
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </Link>
      )}
    </nav>
  );
};

const Archives = (props) => {
  const { dataDate, dataCategories, month, year, dataTitleBlogSidebar } = props;
  const { dataPosts, totalPages, totalPosts } = dataDate;
  const [posts, setPosts] = useState(dataPosts);
  const [hasPostsData, setHasPostsData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', year, month, currentPage, perPage);
      setPosts(result);
      setHasPostsData(true);
    };

    fetchData();
  }, [year, month, currentPage]);

  return (
    <Container>
      <BreadCrumb month={month} year={year} />
      <Row
        className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
      >
        <Col lg={3} className="p-3">
          <Sidebar
            dataCategories={dataCategories}
            dataTitleBlogSidebar={dataTitleBlogSidebar}
          />
        </Col>
        <Col lg={9} className="p-3">
          {hasPostsData ? (
            <>
              <Post data={posts?.dataPosts} dataCategories={dataCategories} />
              <Pagination
                year={year}
                month={month}
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
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

export default Archives;
