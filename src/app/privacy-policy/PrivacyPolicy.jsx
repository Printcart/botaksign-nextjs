'use client';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './PrivacyPolicy.module.css';

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

const PrivacyPolicy = (props) => {
  const { data } = props;

  const markupPrivacyPolicyHeader = {
    __html: data?.content?.rendered || ''
  };

  return (
    <Container>
      <Title data={data} />
      <div className={styles.privacyPolicy}>
        <div dangerouslySetInnerHTML={markupPrivacyPolicyHeader}></div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
