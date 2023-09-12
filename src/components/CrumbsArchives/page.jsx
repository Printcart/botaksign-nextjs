import { Col, Container, Row } from 'react-bootstrap';
import Post from '../Post';
import Sidebar from '../Sidebar/page';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CrumbsArchives.module.css';

const Breadcrumb = (props) => {
  const { month, year, currentPage } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      {currentPage > 1 ? (
        <>
          <span>
            <span>{year}</span>
            <span>/</span>
            <span>{month}</span>
          </span>
          <span>/</span>
          <strong>Page {currentPage}</strong>
        </>
      ) : (
        <strong>
          <span>{year}</span>
          <span>/</span>
          <span>{month}</span>
        </strong>
      )}
    </nav>
  );
};

const Pagination = (props) => {
  const { totalPages, currentPage, year, month } = props;
  const currentPageNumber = parseInt(currentPage);

  return (
    <nav className={styles.pagination}>
      {currentPageNumber > 1 && (
        <Link
          className={styles.newerArticles}
          href={
            currentPageNumber - 1 === 1
              ? `${window.location.pathname}`
              : `/${year}/${month}/page/${currentPageNumber - 1}`
          }
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          Newer Articles
        </Link>
      )}
      {currentPageNumber < totalPages && (
        <Link
          className={styles.olderArticles}
          href={`/${year}/${month}/page/${currentPageNumber + 1}`}
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
      <Breadcrumb month={month} year={year} currentPage={currentPage} />
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
