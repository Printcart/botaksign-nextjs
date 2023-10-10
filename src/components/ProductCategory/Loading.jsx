'use client';
import Image from 'next/image';
import styles from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image width={100} height={100} src="/loading.svg" alt="loading svg" />
    </div>
  );
};

export const LoadingError = () => {
  return (
    <div>
      <p className={styles.error}>No products available on this page.</p>
    </div>
  );
};
