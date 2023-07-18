import { Form } from 'react-bootstrap';
import styles from './footerDescripton.module.css';

const FooterDescripton = ({ descripton, year }) => {
  return (
    <>
      <Form.Label className={`${styles.footerDescripton} ${styles.footerYear}`}>
        {year}
      </Form.Label>
      <Form.Label className={styles.footerDescripton}>{descripton}</Form.Label>
    </>
  );
};

export default FooterDescripton;
