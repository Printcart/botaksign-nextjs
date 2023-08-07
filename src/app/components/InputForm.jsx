import { Form } from 'react-bootstrap';

const InputForm = ({ label, value, onChange, errors, placeholder }) => {
  return (
    <Form.Group controlId="validationFormik101" className="position-relative">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        name={label?.toLowerCase() || ''}
        value={value}
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
