'use client';
import React from 'react';
import PageCoverHeader from 'botak/components/PageCoverHeader';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ColourChart.module.css';
import Link from 'next/link';
import Image from 'next/image';

const PrintingColour = () => {
  return (
    <div id="navSa" className={styles.navContent}>
      <div className={styles.contentTitle}>
        <p>Printing Colour Chart</p>
      </div>
      <Link href="https://botaksign.com/wp-content/uploads/2020/05/Printing-Colour-Chart-A4.pdf">
        <Image
          className={styles.image}
          width={400}
          height={400}
          src="https://botaksign.com/wp-content/uploads/2020/05/Printing-Colour-Chart-1.jpg "
          alt="image"
        />
      </Link>
    </div>
  );
};

const StickerColour = () => {
  return (
    <div id="navCo" className={styles.navContent}>
      <div id="navCowob">
        <div className={styles.contentTitle}>
          <div>
            <p className={styles.contentTitle}>Sticker Colour Chart</p>
          </div>
          <p className={styles.contentSubtitle}>Vinyl Sticker</p>
        </div>
        <div className={styles.conditionsBlock}>
          <Link href="https://botaksign.com/wp-content/uploads/2020/05/CMYK-for-vinyl-sticker-colour-1st-June-20-view.pdf">
            <Image
              className={styles.image}
              width={400}
              height={400}
              src="https://botaksign.com/wp-content/uploads/2020/05/CMYK-for-vinyl-sticker-colour-1st-June-20-view-2-scaled.jpg"
              alt="image"
            />
          </Link>
        </div>
        <div className={styles.conditionsBlock}>
          <Link href="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2020/08/vinyl-sticker-colour-chart-colour.pdf">
            <Image
              className={styles.image}
              width={400}
              height={400}
              src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2020/08/vinyl-sticker-colour-chart-colour-2.jpg"
              alt="image"
            />
          </Link>
        </div>
        <div id="navCowb">
          <p className={styles.contentSubtitle}>Special Effects Sticker</p>
          <div className={styles.conditionsBlock}>
            <Link href="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/material spec and photos/colour chart/specialsticker_stickerchart_1-2.jpg">
              <Image
                className={styles.image}
                width={400}
                height={400}
                src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/material spec and photos/colour chart/specialsticker_stickerchart_1-2.jpg"
                alt="image"
              />
            </Link>
          </div>
          <div className={styles.conditionsBlock}>
            <Link href="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/material spec and photos/colour chart/specialsticker_stickerchart_2-2.jpg">
              <Image
                className={styles.image}
                width={400}
                height={400}
                src="https://botaksign-library.s3.ap-southeast-1.amazonaws.com/material spec and photos/colour chart/specialsticker_stickerchart_2-2.jpg"
                alt="image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationBlock = () => {
  return (
    <>
      <div className={styles.navSeparator}>
        <Link className={styles.clickAble} href="#navSa">
          Printing Colour Chart
        </Link>
      </div>
      <div className={styles.navSeparator}>
        <Link className={styles.clickAble} href="#navCo">
          Sticker Colour Chart
        </Link>
        <Link className={`${styles.sub_nav} ${styles.clickAble}`} href="#navCowob">
          Vinyl Sticker
        </Link>
        <Link className={`${styles.sub_nav} ${styles.clickAble}`} href="#navCowb">
          Special Effects Sticker
        </Link>
      </div>
    </>
  );
};

const ContentBlock = () => {
  return (
    <div className={styles.contentBlock}>
      <PrintingColour />
      <StickerColour />
    </div>
  );
};

const ColourChart = () => {
  return (
    <div>
      <PageCoverHeader title="Colour Charts" link="Home" titlePage="Colour Charts" />
      <Container>
        <Row className={styles.content}>
          <Col lg={3} className={styles.navigationBlock}>
            <NavigationBlock />
          </Col>
          <Col lg={9}>
            <ContentBlock />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ColourChart;
