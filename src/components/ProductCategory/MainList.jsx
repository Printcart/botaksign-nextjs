'use client'
import Image from "next/image";
import Refine from "./Refine";
import Listing from "./Listing";
import styles from "./MainList.module.css";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image
        width={100}
        height={100}
        src="/loading.svg"
        alt="loading svg"
      />
    </div>
  );
}

export const LoadingError = () => {
  return (
    <div>
      <p className={styles.error}>
        No products available on this page.
      </p>
    </div>
  );
}

const MainList = (props) => {
  const { currentId, display, dataTopBar, dataRefine, dataCategory } = props;

  return (
    <div className={styles.main}>
      {dataRefine &&
        <Refine
          dataTopBar={dataTopBar}
          dataRefine={dataRefine}
        />
      }
      <Listing
        currentId={currentId}
        display={display}
        dataTopBar={dataTopBar}
        dataCategory={dataCategory}
      />
    </div>
  );
}

export default MainList;