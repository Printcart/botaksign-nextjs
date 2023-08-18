'use client';
import React from 'react';
import PageCoverHeader from '../components/PageCoverHeader';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './CorporatePartner.module.css';
import Image from 'next/image';

const SpecialProject = () => {
  return (
    <>
      <div>
        <Image
          className="image"
          width={400}
          height={400}
          alt="image"
          src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2020/09/corporate-partner-banner.jpg"
        />
        <div className={styles.wrapperContent}>
          <h2 className="nb-title">
            Special Project Price Available for Corporate Partners!
          </h2>
          <span>
            In this Covid-19 period, we understand it has been a hard time for our
            partners and so, we want to lend our support by giving out reduced
            pricing rate that may be lower than the market pricing in an attempt to
            help with the competitive pricing in the market.
          </span>
          <span>
            We hope that this will help our customers who have been loyal to us to
            secure their businesses.
          </span>
          <span>
            Contact your dedicated
            <Link href="https://botaksign.com/contact-us/" target="_blank">
              Sales / Graphic Specialist
            </Link>
            today!
          </span>
          <span>
            *Terms and conditions of the special pricing will be subjected to the
            criteria as mentioned below
          </span>
        </div>
      </div>
    </>
  );
};
const LinkCorporatePartner = () => {
  return (
    <nav className={styles.wrapper}>
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href="#">Guides</Link>
      <span>/</span>
      <b>Corporate Partner</b>
    </nav>
  );
};
const CorporatePartner = () => {
  return (
    <div>
      <PageCoverHeader
        title="Corporate Partner"
        link="Home"
        titlePage="Corporate Partner"
      />
      <Container>
        <LinkCorporatePartner />
        <SpecialProject />
      </Container>
    </div>
  );
};

export default CorporatePartner;
