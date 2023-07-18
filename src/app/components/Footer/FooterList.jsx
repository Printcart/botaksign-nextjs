import { Form, ListGroup } from 'react-bootstrap';
import FooterLink from './FooterLink';
import styles from './footer.module.css';

const FooterList = ({ item }) => {
  return (
    <>
      <Form.Label className={styles.footerTitle}>{item.title}</Form.Label>
        <ListGroup className={styles.footerList}>
          {item?.links?.map((link, index) => (
            <FooterLink key={`${item.title}-${index}`} link={link} />
          ))}
        </ListGroup>
    </>
  );
};

export default FooterList;
