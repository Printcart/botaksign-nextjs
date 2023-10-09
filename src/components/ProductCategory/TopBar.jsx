'use client'
import React from "react";
import Link from "next/link";
import styles from "./TopBar.module.css";

const TopBar = (props) => {
  const { dataTopBar } = props;

  const current = dataTopBar.length - 1;

  // Handle URL
  const handleURL = (idToFind) => {
    const index = dataTopBar.findIndex(item => item.id === idToFind);
    const url = index === 0 ? dataTopBar[0].slug : dataTopBar[0].slug + "/" + dataTopBar[1].slug;
    return url;
  }

  return (
    <div className={styles.main}>
      <span>
        <Link prefetch={false} href={'/'}>
          Home
        </Link>
        <span>/</span>
      </span>
      {dataTopBar.map((item, index) => (
        <div key={item.id}>
          {current !== index &&
            <span>
              <Link prefetch={false} href={`/product-category/${handleURL(item.id)}`}>
                <div dangerouslySetInnerHTML={{ __html: item?.name }}></div>
              </Link>
              <span>/</span>
            </span>
          }
          {current === index &&
            <strong dangerouslySetInnerHTML={{ __html: item?.name }}></strong>
          }
        </div>
      ))}
    </div >
  );
}

export default TopBar;