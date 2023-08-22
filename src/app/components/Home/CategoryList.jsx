'use client';

import React from "react";
import Link from "next/link";
import styles from "./CategoryList.module.css";

export const ParentCategory = (props) => {
  const { } = props;

  return (
    <div className={styles.main}>
      {data.map((item, index) =>
        <div key={index} className={styles.col}>
          <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }}></div>
          <div className={styles.wrap}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link prefetch={false} href={"/"}>
              <i>
                <span></span>
              </i>
              <button>{item.button}</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

const data = [
  {
    title: "Printing Products",
    description: "Everything about printing! If you are not familiar with our website, please browse the main categories first to understand the types of prints we provide, you may find some unexpected prints product in it. 😆",
    image: "https://botaksign.com/wp-content/uploads/thumbnails/category%20thumbnails/printing-product-s.jpg",
    button: "Browse All Printing Categories"
  },
  {
    title: "Display Products",
    description: "Value-added category to enhance your marketing experience. Including but not limited to our own patented products, such as Roti series roll-up banners and 360° clip poles.",
    image: "https://botaksign.com/wp-content/uploads/thumbnails/category%20thumbnails/display-product-s.jpg",
    button: "Browse All Display Categories"
  }
]