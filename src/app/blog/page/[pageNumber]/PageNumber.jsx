'use client';
import { fetchBlog } from 'botak/api/pages';
import PageCoverHeader from 'botak/app/components/PageCoverHeader';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './PageNumber.module.css';
import { Pagination } from '../../Posts';

const TitleWrap = () => {
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
  const { totalPages, dataPosts } = dataBlog;
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
        <TitleWrap />
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
                <Post data={posts?.dataPosts} />
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
