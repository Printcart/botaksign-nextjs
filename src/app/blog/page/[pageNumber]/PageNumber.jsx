'use client';
import { fetchBlog } from 'botak/api/pages';
import PageCoverHeader from 'botak/app/components/PageCoverHeader';
import Pagination from 'botak/app/components/Pagination';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './PageNumber.module.css';

const BreadCrumb = () => {
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Blog</strong>
    </nav>
  );
};

const PageNumber = (props) => {
  const { dataBlog, dataCategories, pageNumber, dataTitleBlogSidebar } = props;
  const { totalPosts, totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);
  const [hasPostsData, setHasPostsData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', '', '', pageNumber, 4);
      setPosts(result);
      setHasPostsData(true);
    };

    fetchData();
  }, [pageNumber]);

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
                <Pagination totalPages={totalPages} currentPage={pageNumber} />
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

export default PageNumber;
