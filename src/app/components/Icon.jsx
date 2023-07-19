import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styles from './icon.module.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas,fab);

const IconFooter = ({ attr, lib }) => {
  return (
    <FontAwesomeIcon icon={[`${lib}`, `${attr}`]} className={styles.iconFooter} />
  );
};

export default IconFooter;
