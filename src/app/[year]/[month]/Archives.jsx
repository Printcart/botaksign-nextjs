'use client';
import { fetchBlog } from 'botak/api/pages';
import Sider from 'botak/app/components/Sidebar/page';
import { ArticlePost, Pagination } from 'botak/app/posts/Posts';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Archives = (props) => {
  const { date, dataCategories, dataBlog } = props;
  const { totalPosts, totalPages, dataPosts } = date;

  const [posts, setPosts] = useState(dataPosts);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', '', '', currentPage, perPage);
      setPosts(result);
    };

    fetchData();
  }, [currentPage]);

  return (
    <Container>
      <Row
        className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
      >
        <Col lg={3}>
          <Sider dataCategories={dataCategories} dataBlog={dataBlog?.dataPosts} />
        </Col>
        <Col lg={9}>
          {date?.dataPosts.length > 0 &&
            date?.dataPosts.map((item) => (
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
