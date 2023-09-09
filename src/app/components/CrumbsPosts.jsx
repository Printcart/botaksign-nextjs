import { Col, Container, Row } from 'react-bootstrap';
import { Pagination, Breadcrumb } from '../blog/Posts';
import PageCoverHeader from './PageCoverHeader';
import Post from './Post';
import styles from './CrumbsPosts.module.css';
import Sidebar from './Sidebar/page';

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
