'use client';
import React from 'react';
import styles from './Career.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const Title = () => {
  return (
    <>
      <div className={styles.title}>
        <span>
          <Link href="https://botaksign.com/">Home</Link>
          <span>/</span>
          <strong>Career</strong>
        </span>
        <h2>Are you ready to destroy and build with us?</h2>
      </div>
    </>
  );
};

const Button = () => {
  return (
    <>
      <Link href="#">I&apos;M INTERESTED!</Link>
    </>
  );
};

const SubContent = () => {
  return (
    <div className={styles.subContent}>
      <header className={styles.contentHeader}>
        <h2>Graphic Specialist 🎨</h2>
        <h4>5 vacancies</h4>
      </header>
      <div className={styles.description}>
        <p>Whether you are an individual or a team,</p>
        <p>we welcome everyone to join the challenge. 💪</p>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

// const ServiceCashier = () => {
//   return <></>;
// };

// const GeneralWorker = () => {
//   return <></>;
// };

// const Collection = () => {
//   return <></>;
// };

const Content = () => {
  return (
    <Row>
      <Col lg={6}>
        <SubContent />
      </Col>
      <Col lg={6}>
        <SubContent />
      </Col>
      <Col lg={6}>
        <SubContent />
      </Col>
    </Row>
  );
};

const Career = (props) => {
  const { data } = props;

  const markuPageCareer = {
    __html: data.content.rendered || ''
  };
  console.log(data);
  return (
    <>
      <Container className={styles.career}>
        <Title />
        <Content />
        <div dangerouslySetInnerHTML={markuPageCareer}></div>
      </Container>
    </>
  );
};

export default Career;
