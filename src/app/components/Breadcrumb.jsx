import Link from 'next/link';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ titlePage, fontWeight, color }) => {
  return (
    <div className={styles.breadcrumb}>
      <Container>
        <Row>
          <span className={styles.spanBreadcrumb}>
            <span className={styles.spanBreadcrumb}>
              <Link className={styles.linkBreadcrumb} href={'/'}>
                Home
              </Link>
              <span className={styles.spanBreadcrumb}>/</span>
              <strong
                style={{
                  fontWeight: `${fontWeight ? fontWeight : 'bold'}`,
                  color: `${color ? color : '#888888'}`
                }}
              >
                {titlePage}
              </strong>
            </span>
          </span>
        </Row>
      </Container>
    </div>
  );
};

export default Breadcrumb;
