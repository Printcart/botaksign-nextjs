import { Container, Form } from 'react-bootstrap';
import styles from './footerBotom.module.css';

const FooterBottom = ({ copyright }) => {
  return (
    <div className={styles.footerBotom}>
      <Container className="d-flex justify-content-end">
        <Form.Text className={styles.copyrightFooter}>
          {copyright?.copyright}
        </Form.Text>
      </Container>
    </div>
  );
};

export default FooterBottom;
