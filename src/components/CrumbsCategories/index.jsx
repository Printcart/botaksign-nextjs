import { Col, Container, Row } from 'react-bootstrap';
import Post from './Post';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CrumbsCategories.module.css';

const Breadcrumb = (props) => {
  const { slug, currentPage } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <span>
        {currentPage > 1 ? (
          <>
            <span>{slug}</span>
            <span>/</span>
            <strong>Page {currentPage}</strong>
          </>
        ) : (
          <strong>{slug}</strong>
        )}
      </span>
    </nav>
  );
};

const Pagination = (props) => {
  const { totalPages, currentPage, slug } = props;
  const currentPageNumber = parseInt(currentPage);
  return (
    <>
      <nav className={styles.pagination}>
        {currentPageNumber > 1 && (
          <Link
            className={styles.newerArticles}
            href={
              currentPageNumber - 1 === 1
                ? `/category/${slug}`
                : `/category/${slug}/page/${currentPageNumber - 1}`
            }
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            Newer Articles
          </Link>
        )}
        {currentPageNumber < totalPages && (
          <Link
            className={styles.olderArticles}
            href={`/category/${slug}/page/${currentPageNumber + 1}`}
          >
            Older Articles
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </Link>
        )}
      </nav>
    </>
  );
};

const CrumbsCategories = (props) => {
  const {
    totalPages,
    currentPage,
    posts,
    dataCategories,
    dataTitleBlogSidebar,
    slug
  } = props;
  return (
    <Container>
      <Breadcrumb slug={slug} currentPage={currentPage} />
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
          {posts?.data ? (
            <>
              <Post data={posts?.data} />
              <Pagination
                slug={slug}
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

export default CrumbsCategories;
