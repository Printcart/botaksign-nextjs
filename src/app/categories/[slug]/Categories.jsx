'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchBlogRelated } from 'botak/api/pages';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Categories.module.css';

const BreadCrumb = (props) => {
  const { slug } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>{slug}</strong>
    </nav>
  );
};

export const Pagination = (props) => {
  const { totalPages, currentPage, slug } = props;
  return (
    <>
      <nav className={styles.pagination}>
        {currentPage > 1 && (
          <Link
            className={styles.newerArticles}
            href={
              currentPage === 1
                ? `/categories/${slug}`
                : `/categories/${slug}/page/${currentPage - 1}`
            }
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            Newer Articles
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            className={styles.olderArticles}
            href={`/categories/${slug}/page/${+currentPage + 1}`}
          >
            Older Articles
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </Link>
        )}
      </nav>
    </>
  );
};

const Categories = (props) => {
  const { dataCate, id, dataCategories, slug, dataTitleBlogSidebar } = props;
  const { data, totalPages } = dataCate;
  const [posts, setPosts] = useState(data);
  const [hasPostsData, setHasPostsData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlogRelated(id, currentPage, perPage);
      setPosts(result);
      result?.data?.length > 0 && setHasPostsData(true);
    };

    fetchData();
  }, [id, currentPage]);

  return (
    <Container>
      <BreadCrumb slug={slug} />
      <Row
        className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
      >
        <Col lg={3} className="p-3">
          <Sidebar
            dataTitleBlogSidebar={dataTitleBlogSidebar}
            dataCategories={dataCategories}
          />
        </Col>
        <Col lg={9} className="p-3">
          {hasPostsData ? (
            <>
              <Post data={posts?.data} dataCategories={dataCategories} />
              <Pagination
                slug={slug}
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

export default Categories;
