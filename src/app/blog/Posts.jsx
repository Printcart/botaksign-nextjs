'use client';
import { fetchBlog } from 'botak/api/pages';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import Pagination from '../components/Pagination';
import Post from '../components/Post';
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


const Posts = (props) => {
  const { dataBlog, dataCategories, dataTitleBlogSidebar } = props;
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
            <Sidebar
              dataCategories={dataCategories}
              dataTitleBlogSidebar={dataTitleBlogSidebar}
            />
          </Col>
          <Col lg={9} className="px-3">
            {hasPostsData ? (
              <>
                <Post data={posts?.dataPosts} dataCategories={dataCategories} />
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
