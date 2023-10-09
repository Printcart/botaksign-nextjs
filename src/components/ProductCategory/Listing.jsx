'use client'
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useInfiniteQuery } from 'react-query';
import { usePathname } from 'next/navigation';
import { Loading, LoadingError } from "./MainList";
import { fetchProduct } from "botak/api/product";
import Toastify from "botak/utils/toastify";
import styles from "./Listing.module.css";

const Item = (props) => {
  const { item, image, url, price } = props;

  return (
    <div className={styles.item}>
      <div className={styles.child}>
        <Link prefetch={false} href={`${url}/${item?.slug}`}>
          <img src={image?.src} alt={image?.name} />
          <h4>
            <span dangerouslySetInnerHTML={{ __html: item?.name }}></span>
          </h4>
        </Link>
        {price &&
          <span className={styles.price}>
            {price > 0 &&
              <span>From <span className={styles.currentPrice}>SGD {price}</span></span>
            }
          </span>
        }
      </div>
    </div>
  );
}

const Listing = (props) => {
  const { currentId, display, dataTopBar, dataCategory } = props;
  const pathname = usePathname();
  const lengthTopBar = dataTopBar.length;
  const currentSelect = dataTopBar[lengthTopBar - 1];
  const loading = useRef(null);
  const queryKey = 'product' + currentId;

  const {
    data,
    fetchNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery([queryKey], ({ pageParam = 1 }) => fetchProduct(currentId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  useEffect(() => {
    if (typeof window !== "undefined" && loading) {
      const handleScroll = () => {
        const bottom = loading?.current?.getBoundingClientRect()?.bottom;
        const isBottomVisible = bottom <= window?.innerHeight;
        if (isBottomVisible) {
          fetchNextPage()
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const dataProduct = data?.pages?.flatMap((page) => {
    return page.data;
  });

  return (
    <div className={styles.wrapList}>
      <h1>
        <span dangerouslySetInnerHTML={{ __html: currentSelect?.name }}></span>
      </h1>
      <div className={styles.listing}>
        {dataCategory?.length > 0 && dataCategory.map((item) =>
          <Item
            key={item.id}
            item={item}
            image={item?.image}
            url={pathname}
          />
        )}

        {display !== "subcategories" &&
          <>
            {isError && <LoadingError />}
            {isError && <Toastify text="No products available on this page." />}
            {isLoading && <Loading />}
            {dataProduct?.length > 0 && dataProduct.map((item) =>
              <Item
                key={item.id}
                item={item}
                image={item?.images?.[0]}
                url={"/product"}
                price={item?.price}
              />
            )}
            {hasNextPage && <div ref={loading} />}
            {isFetchingNextPage && <Loading />}
          </>
        }
      </div>
    </div>
  );
}

export default Listing;