'use client';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import styles from './Career.module.css';

const Title = (props) => {
  const { title } = props;
  return (
    <>
      <div className={styles.title}>
        <span>
          <Link href="/">Home</Link>
          <span>/</span>
          <strong>{title?.rendered}</strong>
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
        <Title title={data?.title} />
        <div className={styles.careerContent}>
          <div dangerouslySetInnerHTML={markuPageCareer}></div>
        </div>
      </Container>
    </>
  );
};

export default Career;
