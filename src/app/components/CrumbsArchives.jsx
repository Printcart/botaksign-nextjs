import { Col, Container, Row } from 'react-bootstrap';
import { Pagination, TitleWrap } from '../[year]/[month]/Archives';
import Post from './Post';
import Sidebar from './Sidebar/page';

const CrumbsArchives = (props) => {
  const {
    month,
    year,
    dataCategories,
    dataTitleBlogSidebar,
    totalPages,
    currentPage,
    posts,
    hasPostsData
  } = props;
  
  return (
    <Container>
      <TitleWrap month={month} year={year} />
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
