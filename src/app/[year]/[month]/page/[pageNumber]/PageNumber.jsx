'use client';
import { fetchBlog } from 'botak/api/pages';
import CrumbsArchives from 'botak/app/components/CrumbsArchives';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './PageNumber.module.css';

const TitleWrap = (props) => {
  const { month, year, pageNumber } = props;
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href={`/${year}/${month}`}>
        <span>{year}</span>
        <span>/</span>
        <span>{month}</span>
      </Link>
      <span>/</span>
      <strong>Page {pageNumber}</strong>
    </nav>
  );
};

const PageNumber = (props) => {
  const { dataTitleBlogSidebar, dataCategories, month, year, dataDate, pageNumber } =
    props;
  const { totalPages } = dataDate;
  const [archives, setArchives] = useState([]);
  const [hasPostsData, setHasPostsData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', year, month, pageNumber, 4);
      setArchives(result);
      setHasPostsData(true);
    };

    fetchData();
  }, [year, month, pageNumber]);

  return (
    <CrumbsArchives
      month={month}
      year={year}
      posts={archives}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      totalPages={totalPages}
      currentPage={pageNumber}
      hasPostsData={hasPostsData}
    />
  );
};

export default PageNumber;
