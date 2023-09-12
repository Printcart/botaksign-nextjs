import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from 'botak/components/PageCoverHeader';
import Post from 'botak/components/Post';
import styles from './CrumbsPosts.module.css';
import Sidebar from 'botak/components/Sidebar';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Breadcrumb = () => {
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Blog</strong>
    </nav>
  );
};

const Pagination = (props) => {
  const { totalPages, currentPage } = props;
  const currentPageNumber = parseInt(currentPage);

  return (
    <nav className={styles.pagination}>
      {currentPageNumber > 1 && (
        <Link
          className={styles.newerArticles}
          href={
            currentPageNumber - 1 === 1
              ? `/blog`
              : `/blog/page/${currentPageNumber - 1}`
          }
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          Newer Articles
        </Link>
      )}
      {currentPageNumber < totalPages && (
        <Link
          className={styles.olderArticles}
          href={`/blog/page/${currentPageNumber + 1}`}
        >
          Older Articles
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </Link>
      )}
    </nav>
  );
};

const CrumbsPosts = (props) => {
  const { dataTitleBlogSidebar, dataCategories, posts, totalPages, currentPage } =
    props;

  return (
    <>
      <PageCoverHeader
        title="BLOG"
        link="Home"
        titlePage="Blog"
        currentPage={currentPage}
      />
      <Container>
        <Breadcrumb />
        <Row className={styles.contents}>
          <Col lg={3} className="p-3">
            <Sidebar
              dataCategories={dataCategories}
              dataTitleBlogSidebar={dataTitleBlogSidebar}
            />
          </Col>
          <Col lg={9} className="px-3">
            {posts?.dataPosts ? (
              <>
                <Post data={posts?.dataPosts} />
                <Pagination totalPages={totalPages} currentPage={currentPage} />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CrumbsPosts;
