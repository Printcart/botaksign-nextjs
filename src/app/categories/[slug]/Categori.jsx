'use client';
import { fetchBlogRelated } from 'botak/api/pages';
import Sider from 'botak/app/components/Sidebar/page';
import { ArticlePost, Pagination } from 'botak/app/posts/Posts';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Categori = (props) => {
  const { dataCate, dataBlog, dataCategories } = props;
  // const { data, totalPages } = dataCate;
  // const [posts, setPosts] = useState(data);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  const { data, error, isLoading } = useSWR(
    fetchBlogRelated('', '', '', currentPage, perPage),
    fetcher
  );
  console.log(data);

  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchBlogRelated('', '', '', currentPage, perPage);
  //     setPosts(result);
  //     result?.dataPosts.length > 0 && setHasPostsData(true);
  //   };

  //   fetchData();
  // }, [currentPage]);

  return (
    <Container>
      <Row
        className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
      >
        <Col lg={3} className="p-3">
          <Sider dataCategories={dataCategories} dataBlog={dataBlog.dataPosts} />
        </Col>
        <Col lg={9} className="p-3">
          {/* {posts.length > 0 &&
            posts.map((item) => (
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
            ))} */}
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

export default Categori;
