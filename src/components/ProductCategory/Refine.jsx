'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "./Refine.module.css";

const Refine = (props) => {
  const { dataTopBar, dataRefine } = props;
  const pathname = usePathname();
  const currentPath = pathname.split('/').slice(0, -1).join('/');
  const lengthTopBar = dataTopBar.length;
  const currentSelect = dataTopBar[lengthTopBar - 1];

  return (
    <div className={styles.wrapRefine}>
      {lengthTopBar > 1 &&
        <h3 dangerouslySetInnerHTML={{ __html: dataTopBar[lengthTopBar - 2]?.name }}></h3>
      }
      <ul>
        {dataRefine.map((item) =>
          item?.count > 0 &&
          <li key={item.id} className={item.id === currentSelect.id ? styles.select : ""}>
            <Link prefetch={false} href={`${currentPath}/${item?.slug}`}>
              <span dangerouslySetInnerHTML={{ __html: item?.name }}></span>
            </Link>
            <span>
              {item?.count}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Refine;