'use client';
import Link from 'next/link';
import React from 'react';
import styles from './PageCoverHeader.module.css';
import { useSearchParams } from 'next/navigation';

const PageCoverHeader = (props) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const { title, link, titlePage } = props;
  return (
    <>
      <div className={styles.contactHeader}>
        <div className={styles.contactWrap}>
          <h1>{title}</h1>
          <span className={styles.contactLink}>
            <Link href="/">{link}</Link>
            <span>/</span>
            <span className={styles.breadcrumbLast}>{titlePage}</span>
            <span className={styles.breadcrumbLast}>/ Page {page}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default PageCoverHeader;
