'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchBlog } from 'botak/api/pages';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Posts.module.css';
import CrumbsPosts from '../components/CrumbsPosts';

export const Breadcrumb = () => {
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Blog</strong>
    </nav>
  );
};

export const Pagination = (props) => {
  const { totalPages, currentPage } = props;

  return (
    <nav className={styles.pagination}>
      {currentPage > 1 && (
        <Link
          className={styles.newerArticles}
          href={currentPage === 1 ? `/blog` : `/blog/page/${currentPage - 1}`}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          Newer Articles
        </Link>
      )}
      {currentPage < totalPages && (
        <Link
          className={styles.olderArticles}
          href={`/blog/page/${+currentPage + 1}`}
        >
          Older Articles
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </Link>
      )}
    </nav>
  );
};

const Posts = (props) => {
  const { dataBlog, dataCategories, dataTitleBlogSidebar } = props;
  const { totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);
  const currentPage = 1;
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = { currentPage, perPage };
      console.log('queryParams', queryParams);
      const result = await fetchBlog(queryParams);
      setPosts(result);
    };

    fetchData();
  }, [currentPage]);

  return (
    <CrumbsPosts
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      posts={posts}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

export default Posts;
