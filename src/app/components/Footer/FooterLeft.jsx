import Image from 'next/image';
import { Container } from 'react-bootstrap';
import FooterDescripton from './FooterDescripton';
import styles from './footer.module.css';

const FooterLeft = ({ descriptons }) => {
  const { year, image, descripton } = descriptons;
  return (
    <>
      <Container className={styles.imageFooter}>
        <Image
          width={157}
          height={56}
          alt="image footer"
          src={image}
          className="mb-4"
        />
      </Container>
      <FooterDescripton year={year} descripton={descripton} />
    </>
  );
};

export default FooterLeft;
