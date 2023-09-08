'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchBlog } from 'botak/api/pages';
import Post from 'botak/app/components/Post';
import Sidebar from 'botak/app/components/Sidebar/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Archives.module.css';
import CrumbsArchives from 'botak/app/components/CrumbsArchives';

export const TitleWrap = (props) => {
  const { month, year } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>
        <span>{year}</span>
        <span>/</span>
        <span>{month}</span>
      </strong>
    </nav>
  );
};

export const Pagination = (props) => {
  const { totalPages, currentPage, year, month } = props;

  return (
    <nav className={styles.pagination}>
      {currentPage > 1 && (
        <Link
          className={styles.newerArticles}
          href={
            currentPage === 1
              ? `${window.location.pathname}`
              : `/${year}/${month}/page/${+currentPage - 1}`
          }
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          Newer Articles
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          className={styles.olderArticles}
          href={`/${year}/${month}/page/${+currentPage + 1}`}
        >
          Older Articles
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </Link>
      )}
    </nav>
  );
};

const Archives = (props) => {
  const { dataDate, dataCategories, month, year, dataTitleBlogSidebar } = props;
  const { dataPosts, totalPages } = dataDate;
  const [posts, setPosts] = useState(dataPosts);
  const [hasPostsData, setHasPostsData] = useState(false);
  const currentPage = 1;
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', year, month, currentPage, perPage);
      setPosts(result);
      setHasPostsData(true);
    };

    fetchData();
  }, [year, month, currentPage]);

  return (
    <CrumbsArchives
      month={month}
      year={year}
      posts={posts}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      totalPages={totalPages}
      currentPage={currentPage}
      hasPostsData={hasPostsData}
    />
  );
};

export default Archives;
