import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import styles from './footerLink.module.css';
import IconFooter from '../Icon';

const FooterLink = ({ link }) => {
  return (
    <ListGroup.Item className={styles.listItems}>
      {link.icon && <IconFooter attr={link.icon.attr} lib={link.icon.lib} />}
      <Link href={link.url} className={styles.footerList}>
        {link.title}
      </Link>
    </ListGroup.Item>
  );
};

export default FooterLink;
