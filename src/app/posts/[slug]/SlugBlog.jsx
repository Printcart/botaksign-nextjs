'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { SearchBlog, SidebarBlog } from '../Blog';
import styles from './SlugBlog.module.css';

const DetailBlog = (props) => {
  const { content, author, date, title } = props;
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <div className={styles.siteContent}>
      <h3 className={styles.entryTitle}>
        <Link
          href="#"
          dangerouslySetInnerHTML={{
            __html: title
          }}
        />
        <div className={styles.line}></div>
      </h3>
      <div className={styles.entryMeta}>
        <span>{formatDate(date)}</span>
        <span>
          By:<Link href="#">{author || ''}</Link>
        </span>
        <span></span>
        <span></span>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: content
        }}
      ></div>
    </div>
  );
};

const SlugBlog = (props) => {
  const { dataBlogDetails, dataCategories, dataBlog } = props;
  console.log(dataBlogDetails);
  return (
    <Container>
      <Row
        className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
      >
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
              <DetailBlog
                key={item.id}
                title={item?.title?.rendered}
                date={item?.date}
                author={item?.author_data?.name}
                content={item?.content?.rendered}
              />
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
