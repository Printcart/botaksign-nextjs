import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from './PageCoverHeader';
import Post from './Post';
import styles from './CrumbsPosts.module.css';
import Sidebar from './Sidebar/page';
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

  return (
    <nav className={styles.pagination}>
      {currentPage > 1 && (
        <Link
          className={styles.newerArticles}
          href={currentPage === 1 ? `/blog` : `/blog/page/${currentPage - 1}`}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          Newer Articles
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          className={styles.olderArticles}
          href={`/blog/page/${+currentPage + 1}`}
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
      <PageCoverHeader title="BLOG" link="Home" titlePage="Blog" />
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
