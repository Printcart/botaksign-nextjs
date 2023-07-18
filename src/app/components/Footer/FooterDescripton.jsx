import { Form } from 'react-bootstrap';
import styles from './footer.module.css';
const FooterDescripton = ({ descripton, year }) => {
  return (
    <>
      <Form.Text className={styles.footerDescripton}>{year}</Form.Text>
      <br />
      <br />
      <Form.Text className={styles.footerDescripton}>{descripton}</Form.Text>
    </>
  );
};

export default FooterDescripton;
