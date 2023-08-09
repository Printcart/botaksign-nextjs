import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './Flag.module.css';
const Flag = ({ field, form, ...props }) => {
  const { name, value } = field;
  const { touched, errors } = form;
  const error = touched[name] && errors[name];

  const handleChange = (value) => {
    form.setFieldValue(name, value);
    form.setFieldTouched(name, true);
  };

  return (
    <>
      <label htmlFor="phone" className={styles.title}>
        Phone
      </label>
      <PhoneInput
        className={styles.inputPhone}
        {...props}
        country={'us'}
        value={value}
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
