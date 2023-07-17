import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { footerLinks } from '../../constant';
import FooterDescripton from './FooterDescripton';
import styles from './footer.module.css';

const FooterLeft = () => {
  return (
    <>
      <Container className={styles.imageFooter}>
        {footerLinks.map((image, index) => {
          if (image.image) {
            return (
              <Image
                key={`index${index}`}
                width={157}
                height={56}
                alt="image footer"
                src={image?.image?.src}
                className="mb-4"
              />
            );
          } else {
            return null;
          }
        })}
      </Container>

      {footerLinks.map((item, index) => {
        if (item.year && item.descripton) {
          return <FooterDescripton key={`index${index}`} item={item} />;
        } else {
          return null;
        }
      })}
    </>
  );
};

export default FooterLeft;
