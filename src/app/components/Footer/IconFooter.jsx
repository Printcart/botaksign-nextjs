import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);
import styles from './footer.module.css';

const IconFooter = ({ attr, lib }) => {
  return (
    <FontAwesomeIcon icon={[`${lib}`, `${attr}`]} className={styles.iconFooter} />
  );
};

export default IconFooter;
