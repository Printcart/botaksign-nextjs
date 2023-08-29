'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { SearchBlog, SidebarBlog } from '../Blog';
import styles from './SlugBlog.module.css';

const SlugBlog = (props) => {
  const { dataBlogDetails, dataCategories, dataBlog } = props;
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };
  return (
    <Container>
      <Row className="mt-5">
        <Col lg={3}>
          <SearchBlog className="lightSearch" />
          <SidebarBlog
            dataBlog={dataBlog?.dataPosts}
            dataCategories={dataCategories}
          />
        </Col>
        <Col lg={9}>
          {dataBlogDetails.length > 0 &&
            dataBlogDetails.map((item) => (
              <div key={item.id} className={styles.siteContent}>
                <h3 className={styles.entryTitle}>
                  <Link
                    href="#"
                    dangerouslySetInnerHTML={{
                      __html: item?.title?.rendered
                    }}
                  />
                  <div className={styles.line}></div>
                </h3>
                <div className={styles.entryMeta}>
                  <span>{formatDate(item?.date)}</span>
                  <span>
                    By:<Link href="#">{item?.author_data?.name || ''}</Link>
                  </span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{
                    __html: item?.content?.rendered
                  }}
                ></div>
              </div>
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
