import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './icon.module.css';
library.add(fas);

const IconFooter = ({ attr, lib }) => {
  return (
    <FontAwesomeIcon icon={[`${lib}`, `${attr}`]} className={styles.iconFooter} />
  );
};

export default IconFooter;
