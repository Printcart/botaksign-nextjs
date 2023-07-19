import { Container, Form } from 'react-bootstrap';
import styles from './footerBotom.module.css';

const FooterBottom = ({ copyright }) => {
  return (
    <div className={styles.footerBotom}>
      <div className="container d-flex justify-content-end">
        <Form.Text className={styles.copyrightFooter}>
          {copyright?.copyright}
        </Form.Text>
      </div>
    </div>
  );
};

export default FooterBottom;
