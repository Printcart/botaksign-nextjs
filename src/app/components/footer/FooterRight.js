import { footerLinks } from '../../constant';
import FooterList from './FooterList';

const FooterRight = () => {
  return (
    <>
      {footerLinks.map((item, index) => {
        if (item.title && item.links) {
          return <FooterList key={`${item.title}-${index}`} item={item} />;
        } else {
          return <></>;
        }
      })}
    </>
  );
};

export default FooterRight;
