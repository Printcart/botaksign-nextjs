'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './TermsAndConditions.module.css';
import Link from 'next/link';

const Title = (props) => {
  const { data } = props;

  return (
    <div className={styles.title}>
      <span>
        <Link href="/">Home</Link>
        <span className={styles.slashLine}>/</span>
        <strong dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}></strong>
      </span>
    </div>
  );
};

const TermsAndConditions = (props) => {
  const { data } = props;

  const markupHomePageHeader = {
    __html: data?.content?.rendered || ''
  };

  return (
    <Container>
      <Title data={data} />
      <div className={styles.termsAndConditons}>
        <div dangerouslySetInnerHTML={markupHomePageHeader}></div>
      </div>
    </Container>
  );
};

export default TermsAndConditions;
