import Link from 'next/link';
import React from 'react';
import styles from './PageCoverHeader.module.css';

const PageCoverHeader = (props) => {
  const { title, link, titlePage } = props;
  return (
    <>
      <div className={styles.contactHeader}>
        <div className={styles.contactWrap}>
          <h1>{title || ''}</h1>
          <span className={styles.contactLink}>
            <Link href="/">{link || ''}</Link>
            <span>/</span>
            <span className={styles.breadcrumbLast}>{titlePage || ''}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default PageCoverHeader;
