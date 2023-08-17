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
  textarea,
  rows,
  applyLabelForm
}) => {
  const subInput = Boolean(label);
  return (
    <Form.Group
      controlId={controlId}
      className={`${styles.subInput} ${subInput ? '' : styles.noLabel}`}
    >
      <Form.Label className={applyLabelForm ? 'lableForm' : ''}>
        {label} {required && <span className={styles.required}>*</span>}
      </Form.Label>
      <Form.Control
        as={textarea ? 'textarea' : 'input'}
        rows={rows}
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
