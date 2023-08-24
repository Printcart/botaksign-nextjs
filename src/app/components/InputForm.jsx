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
  customCss
}) => {
  const subInput = Boolean(label);
  return (
    <Form.Group
      controlId={controlId}
      className={`${styles.subInput} ${subInput ? '' : styles.noLabel}`}
    >
      <Form.Label
        style={{
          color: customCss ? '#D3D1D1' : '#212529',
          fontSize: customCss ? '12px' : '16px',
          lineHeight: '1.5'
        }}
      >
        {label} {required && <span className={styles.required}>*</span>}
      </Form.Label>
      <Form.Control
        style={{ color: '#B5B5B5' }}
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
