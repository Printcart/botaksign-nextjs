import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import styles from './footer.module.css';
import { faCoffee, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterLink = ({ link }) => {
  return (
    <>
      <ListGroup.Item className={styles.listItems}>
        {link.icon && link.icon.lib === 'fa' && (
          <FontAwesomeIcon icon={link.icon.attr} />
        )}
        <Link href={link.url} className={styles.footerList}>
          {link.title}
        </Link>
      </ListGroup.Item>
    </>
  );
};

export default FooterLink;
