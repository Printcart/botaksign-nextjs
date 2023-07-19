import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import IconFooter from '../Icon';
import styles from './footerLink.module.css';

const FooterLink = ({ link }) => {
  return (
    <ListGroup.Item className={styles.listItems}>
      {link.icon && <IconFooter attr={link.icon.attr} lib={link.icon.lib} />}
      {typeof link.title === 'string' ? (
        <Link href={link.url} className={styles.footerList}>
          {link.title}
        </Link>
      ) : (
        link.title.map((title, subIndex) =>
          title.url ? (
            <Link href={title.url} key={subIndex} className={styles.footerList}>
              {title.phone}
            </Link>
          ) : (
            <span key={subIndex} className={styles.footerList}>
              {title.phone}
            </span>
          )
        )
      )}
    </ListGroup.Item>
  );
};

export default FooterLink;
