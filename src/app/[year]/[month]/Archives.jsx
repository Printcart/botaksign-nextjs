'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchBlog } from 'botak/api/pages';
import ArticlePost from 'botak/app/components/ArticlePost';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Archives.module.css';

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
              : `${window.location.pathname}/${+currentPage - 1}`
          }
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          Newer Articles
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          className={styles.olderArticles}
          href={`${window.location.pathname}/page/${+currentPage + 1}`}
        >
          Older Articles
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </Link>
      )}
    </nav>
  );
};

const Archives = (props) => {
  const { date, dataCategories, month, year, dataTitleBlogSidebar } = props;
  const { dataPosts, totalPages, totalPosts } = date;
  const [posts, setPosts] = useState(dataPosts);
  console.log(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', year, month, currentPage, perPage);
      setPosts(result);
    };

    fetchData();
  }, [year, month, currentPage]);

  return (
    <Container>
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
          <Post data={posts?.dataPosts} dataCategories={dataCategories} />
          <Pagination
            year={year}
            month={month}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Archives;
