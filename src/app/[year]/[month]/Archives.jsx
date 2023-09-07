'use client';
import { fetchBlog } from 'botak/api/pages';
import ArticlePost from 'botak/app/components/ArticlePost';
import Pagination from 'botak/app/components/Pagination';
import Sidebar from 'botak/app/components/Sidebar/page';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Archives = (props) => {
  const { date, dataCategories, dataBlog, params } = props;
  const { dataPosts, totalPages, totalPosts } = date;
  const [posts, setPosts] = useState(dataPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog(
        '',
        params?.year,
        params?.month,
        currentPage,
        perPage
      );
      setPosts(result);
    };

    fetchData();
  }, [params?.year, params?.month, currentPage]);

  return (
    <Container>
      <Row
        className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
      >
        <Col lg={3} className="p-3">
          <Sidebar dataCategories={dataCategories} dataBlog={dataBlog?.dataPosts} />
        </Col>
        <Col lg={9} className="p-3">
          {posts?.dataPosts?.length > 0 &&
            posts?.dataPosts?.map((item) => (
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
        </Col>
      </Row>
    </Container>
  );
};

export default Archives;
