import { Container } from 'react-bootstrap';
import { footerLinks } from '../../constant';
import FooterList from './FooterList';
import styles from './footer.module.css';

const FooterRight = () => {
  return (
    <Container className={styles.footerRight}>
      {footerLinks.map((item, index) => {
        if (item.title && item.links) {
          return <FooterList key={`${item.title}-${index}`} item={item} />;
        } else {
          return <></>;
        }
      })}
    </Container>
  );
};

export default FooterRight;
