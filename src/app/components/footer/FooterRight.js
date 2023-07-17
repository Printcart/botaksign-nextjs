import { footerLinks } from '../../constant';
import FooterList from './FooterList';

const FooterRight = () => {
  return (
    <>
      {footerLinks.map((item) => {
        if (item.title && item.links) {
          return <FooterList key={item.title} item={item} />;
        } else {
          return <></>;
        }
      })}
    </>
  );
};

export default FooterRight;
