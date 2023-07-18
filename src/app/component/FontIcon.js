import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas, far, fab);

const FontIcon = (props) => {
  const { prefix, iconName } = props;
  return (
    <>
      {prefix && iconName && <FontAwesomeIcon icon={[`${prefix}`, `${iconName}`]} />}
    </>
  );
};

export default FontIcon;
