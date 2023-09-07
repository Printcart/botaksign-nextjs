'use client';
import { fetchBlog } from 'botak/api/pages';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Posts.module.css';
import ArticlePost from 'botak/app/components/ArticlePost';
import PageCoverHeader from 'botak/app/components/PageCoverHeader';
import Sidebar from 'botak/app/components/Sidebar/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const BreadCrumb = () => {
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Blog</strong>
    </nav>
  );
};

const Pagination = (props) => {
  const { totalPages, currentPage, setCurrentPage } = props;

  const router = useRouter();

  const goToPage = (page) => {
    setCurrentPage(page);
    const newPathname = `${window.location.pathname}/${page}`;
    router.push(newPathname);
  };

  return (
    <>
      {totalPages > 0 && (
        <nav className={styles.pagination}>
          {currentPage > 1 && (
            <button onClick={() => goToPage(currentPage - 1)}>
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              Newer Articles
            </button>
          )}
          {currentPage < totalPages && (
            <button onClick={() => currentPage + 1}>
              <Link href={`/blog/page/${currentPage}`}>
                Older Articles
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
              </Link>
            </button>
          )}
        </nav>
      )}
    </>
  );
};

const ContentArticle = (props) => {
  const { dataBlog, dataCategories } = props;
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

const PageNumber = (props) => {
  const { dataBlog, dataCategories, pageNumber } = props;
  console.log(pageNumber);
  const { totalPosts, totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);
  const [hasPostsData, setHasPostsData] = useState(false);

  const [currentPage, setCurrentPage] = useState(pageNumber);
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
            <>
              <ContentArticle dataBlog={dataBlog} dataCategories={dataCategories} />
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageNumber;
