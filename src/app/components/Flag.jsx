import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './Flag.module.css';
const Flag = (props) => {
  const { field, form, required } = props;
  const error = form.touched[field.name] && form.errors[field.name];

  const handleChange = (value) => {
    form.setFieldValue(field.name, value);
    form.setFieldTouched(field.name, true);
  };

  return (
    <>
      <label htmlFor="phone" className={styles.title}>
        {field.name} {required && <span className={styles.required}>*</span>}
      </label>
      <PhoneInput
        className={styles.inputPhone}
        country={'sg'}
        value={field.value}
        onChange={handleChange}
        inputProps={{
          required: true
        }}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Flag;
