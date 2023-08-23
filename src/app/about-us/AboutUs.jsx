'use client';
import { Container } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import styles from './AboutUs.module.css';

const AboutUs = (props) => {
  const { data } = props;

  const markupAboutUSHeader = {
    __html: data?.content?.rendered || ''
  };

  return (
    <div>
      <PageCoverHeader title="About Us" link="Home" titlePage="About Us" />
      <Container>
        <div className={styles.aboutUs}>
          <div dangerouslySetInnerHTML={markupAboutUSHeader}></div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
