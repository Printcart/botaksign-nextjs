import { Form, ListGroup } from 'react-bootstrap';
import FooterLink from './FooterLink';
import styles from './footerList.module.css';

const FooterList = ({ item }) => {
  return (
    <>
      <Form.Label className={styles.footerTitle}>{item.title}</Form.Label>
      <ListGroup className={styles.footerList}>
        {item?.links?.map((link, index) => (
          <FooterLink key={`index${index}`} link={link} />
        ))}
      </ListGroup>
    </>
  );
};

export default FooterList;
