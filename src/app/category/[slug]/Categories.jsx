'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchBlogById } from 'botak/api/pages';
import CrumbsCategories from 'botak/app/components/CrumbsCategories';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Categories.module.css';

export const TitleWrap = (props) => {
  const { slug, currentPage } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <span>{slug}</span>
      <span>/</span>
      <span>Page {currentPage}</span>
    </nav>
  );
};

export const Pagination = (props) => {
  const { totalPages, currentPage, slug } = props;
  return (
    <>
      <nav className={styles.pagination}>
        {currentPage > 1 && (
          <Link
            className={styles.newerArticles}
            href={
              currentPage === 1
                ? `/category/${slug}`
                : `/category/${slug}/page/${currentPage - 1}`
            }
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            Newer Articles
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            className={styles.olderArticles}
            href={`/category/${slug}/page/${+currentPage + 1}`}
          >
            Older Articles
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </Link>
        )}
      </nav>
    </>
  );
};

const Categories = (props) => {
  const { dataCate, id, dataCategories, slug, dataTitleBlogSidebar } = props;
  const { data, totalPages } = dataCate;
  const [posts, setPosts] = useState(data);
  const [hasPostsData, setHasPostsData] = useState(false);
  const currentPage = 1;
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlogById(id, currentPage, perPage);
      setPosts(result);
      setHasPostsData(true);
    };

    fetchData();
  }, [id, currentPage]);

  return (
    <CrumbsCategories
      slug={slug}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      dataCategories={dataCategories}
      posts={posts}
      currentPage={currentPage}
      totalPages={totalPages}
      hasPostsData={hasPostsData}
    />
  );
};

export default Categories;
