'use client';
import { fetchBlog } from 'botak/api/pages';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArticlePost from '../components/ArticlePost';
import PageCoverHeader from '../components/PageCoverHeader';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar/page';
import styles from './Posts.module.css';

const BreadCrumb = () => {
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Blog</strong>
    </nav>
  );
};

const ContentArticle = (props) => {
  const { dataBlog, dataCategories } = props;
  console.log('dataBlog', dataBlog);
  const categoryNamesMap = {};
  dataCategories.forEach((category) => {
    categoryNamesMap[category.id] = category.name;
  });

  return (
    <>
      {dataBlog?.dataPosts?.length > 0 &&
        dataBlog?.dataPosts?.map((item) => {
          const categoryName =
            categoryNamesMap[item?.categories[0]] || 'Uncategorized';
          return (
            <ArticlePost
              categoryName={categoryName}
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
          );
        })}
    </>
  );
};

const Posts = (props) => {
  const { dataBlog, dataCategories } = props;
  const { totalPosts, totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);
  const [hasPostsData, setHasPostsData] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', '', '', currentPage, perPage);
      setPosts(result);
      result?.dataPosts.length > 0 && setHasPostsData(true);
    };

    fetchData();
  }, [currentPage]);

  return (
    <>
      <PageCoverHeader title="BLOG" link="Home" titlePage="Blog" />
      <Container>
        <BreadCrumb />
        <Row className={styles.contents}>
          <Col lg={3} className="p-3">
            <Sidebar dataCategories={dataCategories} dataBlog={dataPosts} />
          </Col>
          <Col lg={9} className="px-3">
            {hasPostsData ? (
              <>
                <ContentArticle dataBlog={posts} dataCategories={dataCategories} />
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
    </>
  );
};

export default Posts;
