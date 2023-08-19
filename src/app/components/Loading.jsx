import { Spinner } from 'react-bootstrap';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.spinner}>
      <Spinner animation="border" variant="success" />
    </div>
  );
};
export default Loading;
