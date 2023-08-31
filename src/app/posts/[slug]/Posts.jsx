'use client';
import Sider from 'botak/app/components/SiderPost/page';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Posts.module.css';
import Image from 'next/image';

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

const EntryRecent = (props) => {
  const { featured, slug, title } = props;
  return (
    <div className={styles.related}>
      <Image alt="image" height={200} width={200} src={featured || ''} />
      <h5>
        <Link href={slug}>{title}</Link>
      </h5>
    </div>
  );
};

const Posts = (props) => {
  const { dataBlogDetails, dataCategories, dataBlog, dataRelated } = props;
  return (
    <Container>
      <Row className={styles.contents}>
        <Col lg={3}>
          <Sider dataBlog={dataBlog?.dataPosts} dataCategories={dataCategories} />
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

            <Row className={styles.contentRelated}>
              {dataRelated.length > 0 &&
                dataRelated.map((item) => (
                  <div key={item.id} className={styles.subCon}>
                    <EntryRecent
                      title={item?.title?.rendered}
                      slug={item?.slug}
                      featured={item?.featured_media_url}
                    />
                  </div>
                ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
