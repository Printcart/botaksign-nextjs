'use client';
import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import styles from './page.module.css';

const FooterMenuItem = (props) => {
  const { items } = props;
  return (
    <>
      {items?.length > 0 &&
        items.map((item, index) => (
          <MenuItem key={`MenuItem-${index}`} item={item} />
        ))}
    </>
  );
};

const MenuItem = (props) => {
  const { item } = props;
  return (
    <ListGroup.Item className={styles.listItems}>
      <Link href="" className={styles.footerList}>
        {item?.title?.rendered || ''}
      </Link>
    </ListGroup.Item>
  );
};

export default FooterMenuItem;
