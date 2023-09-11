'use client';
import Link from 'next/link';
import styles from './PageCoverHeader.module.css';

const PageCoverHeader = (props) => {
  const { title, link, titlePage, currentPage } = props;

  return (
    <>
      <div className={styles.contactHeader}>
        <div className={styles.contactWrap}>
          <h1>{title}</h1>
          <span className={styles.contactLink}>
            <Link href="/">{link}</Link>
            <span>/</span>
            <span className={styles.breadcrumbLast}>
              {currentPage > 1 ? (
                <>
                  <Link href="/blog" className={styles.breadcrumbLink}>
                    {titlePage}
                  </Link>{' '}
                  <span>/</span> <span>Page {currentPage}</span>
                </>
              ) : (
                <span className={styles.breadcrumbLast}>{titlePage}</span>
              )}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default PageCoverHeader;
