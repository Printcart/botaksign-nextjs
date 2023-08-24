import { FloatingLabel, Form } from 'react-bootstrap';
import styles from '../components/InputForm.module.css';

const InputFormFloat = ({
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
    <Form.Floating
    style={{
        color: customCss ? '#D3D1D1' : '#212529',
        fontSize: customCss ? '14px' : '16px',
        lineHeight: '1.5'
      }}
    >
      <Form.Control
        id={controlId}
        style={{ color: '#B5B5B5' }}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        isInvalid={errors}
      />
      <label htmlFor={controlId}> {label}{required && <span className={styles.required}>*</span>}</label>
  

      {errors && (
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      )}
    </Form.Floating>
  );
};

export default InputFormFloat;
