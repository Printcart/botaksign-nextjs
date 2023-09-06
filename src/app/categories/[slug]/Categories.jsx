'use client';
import { fetchBlogRelated } from 'botak/api/pages';
import ArticlePost from 'botak/app/components/ArticlePost';
import Pagination from 'botak/app/components/Pagination';
import Sider from 'botak/app/components/Sidebar/page';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Categories = (props) => {
  const { dataCate, dataBlog, id, dataCategories } = props;
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
      <Row
        className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
      >
        <Col lg={3} className="p-3">
          <Sider dataCategories={dataCategories} dataBlog={dataBlog.dataPosts} />
        </Col>
        <Col lg={9} className="p-3">
          {hasPostsData ? (
            <>
              {posts?.data?.length > 0 &&
                posts?.data?.map((item) => (
                  <ArticlePost
                    key={item?.id}
                    link={item?.link}
                    slug={item?.slug}
                    title={item?.title?.rendered}
                    date={item?.date}
                    excerpt={item?.excerpt?.rendered}
                    featuredMediaUrl={item?.featured_media_url}
                    idItem={item?.id}
                    author={item?.author_data?.name}
                  />
                ))}
              <Pagination
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
