import { Container, Form } from 'react-bootstrap';
import styles from './footer.module.css';
const FooterDescripton = ({ item }) => {
  return (
    <>
      <Form.Text className={styles.footerDescripton}>{item?.year}</Form.Text>
      <br />
      <br />
      <Form.Text className={styles.footerDescripton}>{item?.descripton}</Form.Text>
    </>
  );
};

export default FooterDescripton;
