'use client';
import useSWR from 'swr';
import styles from './ProductCategory.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const fetcherWithAuthorization = (url) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
      )}`
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Unauthorized');
    }
    return res.json();
  });

const ProductCategory = () => {
  const router = useRouter();
  const fetUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}wc/v3/products/categories/`;
  const { data, error } = useSWR(fetUrl, fetcherWithAuthorization, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const handleCategoryClick = (categoryId) => {
    router.push(`/product-category/posters-cards/${categoryId}`);
  };

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.shopSidebar}>
      <ul>
        {data.length > 0 &&
          data.map((item) => (
            <li key={item.id} className={styles.lists}>
              <span className={styles.name}>
                <Link
                  className={styles.list}
                  href={`/product-category/posters-cards/${item.id}`}
                  onClick={() => handleCategoryClick(item.id)}
                  passHref
                >
                  {item.name}
                </Link>
                <span className={styles.count}>{item?.count || 0}</span>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductCategory;
