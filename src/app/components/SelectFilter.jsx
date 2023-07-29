import { Form } from 'react-bootstrap';
import styles from './SelectFilter.module.css';
export const SelectFilter = () => {
  return (
    <div className={styles.select}>
      <Form.Select aria-label="Default select example">
        <OptionSelect />
      </Form.Select>
    </div>
  );
};

export const OptionSelect = () => {
  return (
    <>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </>
  );
};
