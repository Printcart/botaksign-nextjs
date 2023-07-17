import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import styles from './footer.module.css';

const FooterLink = ({ link }) => {
  return (
    <>
      <ListGroup.Item className={styles.listItems}>
        {link.icon && link.icon.lib === 'fa' && (
          <FontAwesomeIcon
            icon={[link.icon.lib, link.icon.attr]}
            className={styles.iconFooter}
          />
        )}

        <Link href={link.url} className={styles.footerList}>
          {link.title}
        </Link>
      </ListGroup.Item>
    </>
  );
};

export default FooterLink;
