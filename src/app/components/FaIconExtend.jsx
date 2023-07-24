import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FaIconExtend.module.css';

library.add(fas, fab);

const FaIconExtend = (props) => {
  const { attr, lib, hasCircle = false } = props;

  return (
    <div className={`${styles.wrapIcon}  ${hasCircle ? styles.hasCircle : ''}`}>
      <FontAwesomeIcon icon={[lib, attr]} />
    </div>
  );
};

export default FaIconExtend;
