import { Form } from 'react-bootstrap';
import styles from '../components/InputForm.module.css';

const InputForm = ({
  controlId,
  label,
  type,
  value,
  onChange,
  errors,
  placeholder,
  name
}) => {
  return (
    <Form.Group controlId={controlId} className={styles.subInput}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        isInvalid={errors}
      />
      {errors && (
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default InputForm;
