import { Col, Container, Row } from 'react-bootstrap';
import Post from './Post';
import Sidebar from './Sidebar/page';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CrumbsArchives.module.css';

const Breadcrumb = (props) => {
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

const Pagination = (props) => {
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

const CrumbsArchives = (props) => {
  const {
    month,
    year,
    dataCategories,
    dataTitleBlogSidebar,
    totalPages,
    currentPage,
    posts
  } = props;

  return (
    <Container>
      <Breadcrumb month={month} year={year} />
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
          {posts?.dataPosts ? (
            <>
              <Post data={posts?.dataPosts} dataCategories={dataCategories} />
              <Pagination
                year={year}
                month={month}
                totalPages={totalPages}
                currentPage={currentPage}
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

export default CrumbsArchives;
