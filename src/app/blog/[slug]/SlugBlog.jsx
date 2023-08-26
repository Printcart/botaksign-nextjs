'use client';
import { Col, Container, Row } from 'react-bootstrap';
import { SidebarBlog } from '../Blog';
import styles from './SlugBlog.module.css';
import Link from 'next/link';

const SlugBlog = (props) => {
  const { dataBlogDetails } = props;
  console.log(dataBlogDetails);

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <SidebarBlog />
        </Col>
        <Col lg={9}>
          {dataBlogDetails.length > 0 &&
            dataBlogDetails.map((item) => (
              <>
                <h3 className={styles.entryTitle}>
                  <Link
                    href="#"
                    dangerouslySetInnerHTML={{
                      __html: dataBlogDetails?.title?.rendered
                    }}
                  />
                  <div className={styles.line}></div>
                </h3>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{
                    __html: dataBlogDetails?.content?.rendered
                  }}
                ></div>
              </>
            ))}

          <div className={styles.relatedArticle}>
            <div className={styles.relatedTitle}>
              <h2>RELATED ARTICLEs</h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SlugBlog;
