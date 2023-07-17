import { Container, Form } from 'react-bootstrap';
import styles from './footer.module.css';
const FooterDescripton = ({ item }) => {
  return (
    <>
      <Container className="pe-5">
        <Form.Text className={styles.footerDescripton}>{item?.year}</Form.Text>
        <Form.Text className={styles.footerDescripton}>{item?.descripton}</Form.Text>
      </Container>
    </>
  );
};

export default FooterDescripton;
