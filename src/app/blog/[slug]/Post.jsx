'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Post.module.css';
import Image from 'next/image';
import Sidebar from 'botak/components/Sidebar';

const DetailBlog = (props) => {
  const { content, author, date, title, categoriesData } = props;
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <div className={styles.siteContent}>
      <div className={styles.entryCat}>
        <Link href={`/category/${categoriesData[0]?.slug}`}>
          {categoriesData[0]?.name}
        </Link>
      </div>
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
          BY:{' '}
          <Link href="" className={styles.author}>
            {author || ''}
          </Link>
        </span>
        <span>
          2 <span>MINUTE READ</span>
        </span>
        <span>{'' || 'No Comments'}</span>
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

const Post = (props) => {
  const { dataBlogDetails, dataCategories, categoriesId, dataTitleBlogSidebar } =
    props;
  return (
    <Container>
      <Row className={styles.contents}>
        <Col lg={3} className="p-3">
          <Sidebar
            dataTitleBlogSidebar={dataTitleBlogSidebar}
            dataCategories={dataCategories}
          />
        </Col>
        <Col lg={9} className="p-3">
          {dataBlogDetails.length > 0 &&
            dataBlogDetails.map((item) => (
              <DetailBlog
                key={item.id}
                categoriesData={item?.categories_data}
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
              {categoriesId?.data?.length > 0 &&
                categoriesId?.data?.map((item) => (
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

export default Post;
