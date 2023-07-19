import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import styles from './menuItem.module.css';

const MenuItem = (props) => {
  const { label, url } = props;

  return (
    <ListGroup.Item className={styles.listItems}>
      <Link href={url} className={styles.footerList}>
        {label}
      </Link>
    </ListGroup.Item>
  );
};

export default MenuItem;
