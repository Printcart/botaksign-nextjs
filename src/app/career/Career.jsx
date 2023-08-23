'use client';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import styles from './Career.module.css';

const Title = (props) => {
  const { data } = props;
  return (
    <>
      <div className={styles.title}>
        <span>
          <Link href="https://botaksign.com/">Home</Link>
          <span>/</span>
          <strong>{data?.title?.rendered}</strong>
        </span>
      </div>
    </>
  );
};

const Career = (props) => {
  const { data } = props;

  const markuPageCareer = {
    __html: data?.content?.rendered || ''
  };

  return (
    <>
      <Container className={styles.career}>
        <Title data={data} />
        <div className={styles.careerContent}>
          <div dangerouslySetInnerHTML={markuPageCareer}></div>
        </div>
      </Container>
    </>
  );
};

export default Career;
