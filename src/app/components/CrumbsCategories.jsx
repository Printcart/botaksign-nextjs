import { Col, Container, Row } from 'react-bootstrap';
import Post from './Post';
import Sidebar from './Sidebar/page';
import { Pagination, Breadcrumb } from '../category/[slug]/Categories';

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
