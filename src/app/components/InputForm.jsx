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
  name,
  required,
  dots
}) => {
  console.log(value);
  const subInput = Boolean(label);
  return (
    <Form.Group
      controlId={controlId}
      className={`${styles.subInput} ${subInput ? '' : styles.noLabel}`}
    >
      <Form.Label>
        {label} {required && <span className={styles.required}>*</span>}{' '}
        {dots && <span>:</span>}
      </Form.Label>
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
