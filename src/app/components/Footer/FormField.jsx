import { ErrorMessage, Field } from 'formik';
import styles from './FormField.module.css';

const FormField = ({ name, type, label, required, dots }) => {
  return (
    <div className={styles.form}>
      <label className={styles.lable}>
        {label} {required && <span className={styles.required}>*</span>}{' '}
        {dots && <span>:</span>}
      </label>
      <Field className={styles.field} name={name} type={type} />
      <ErrorMessage className={styles.error} name={name} component="div" />
    </div>
  );
};

export default FormField;
