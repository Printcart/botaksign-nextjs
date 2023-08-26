'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import styles from './Blog.module.css';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
  return (
    <form>
      <input className={styles.input} type="text" placeholder="Search" />
      <span className={styles.button}>
        <button type="submit">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </span>
    </form>
  );
};

const BreadCrumb = () => {
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Blog</strong>
    </nav>
  );
};

const Title = (props) => {
  const { title, className, href } = props;
  return (
    <>
      {href && href ? (
        href && (
          <h3 className={styles[className]}>
            <Link href={`/posts/${href}`}>{title}</Link>
          </h3>
        )
      ) : (
        <h3 className={styles[className]}>{title}</h3>
      )}
    </>
  );
};

const ContentSider = (props) => {
  const { className, items, renderItem } = props;
  return (
    <div className={styles[className]}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
};

const Categories = (props) => {
  const { dataCategories } = props;
  return (
    <>
      <Title title="CATEGORIES" className="title" />
      <ContentSider
        className="titleCate"
        items={dataCategories}
        renderItem={(category) => (
          <Link href={category?.slug}>{category?.name}</Link>
        )}
      />
    </>
  );
};

const Archives = (props) => {
  const { date } = props;

  const formatDateArchives = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <>
      <Title title="ARCHIVES" className="title" />
      <ContentSider
        className="titleSider"
        items={date}
        renderItem={(dateItem) => (
          <Link href={dateItem?.slug}>{formatDateArchives(dateItem?.date)}</Link>
        )}
      />
    </>
  );
};

const Blogs = (props) => {
  const { title } = props;
  return (
    <>
      <Title title="RECENT POSTS" className="title" />
      <ContentSider
        className="titleSider"
        items={title}
        renderItem={(post) => (
          <Link href={post?.guid?.rendered}>{post?.title?.rendered}</Link>
        )}
      />
    </>
  );
};

const Information = (props) => {
  const { item } = props;
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <div className={styles.entryWrap}>
      <span className={styles.date}>{formatDate(item?.date)}</span>
      <span>ss</span>
      <span>csd</span>
      <span>No Comments</span>
    </div>
  );
};

const ReadMore = (props) => {
  const { item } = props;
  return (
    <Fragment>
      <div>
        <div
          className={styles.entryText}
          dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}
        ></div>
        <div className={styles.readMoreLink}>
          <Link href="#">Read more</Link>
        </div>
      </div>
      <div className={styles.entryFooter}>
        <span>share: </span>
      </div>
    </Fragment>
  );
};

const ContentArticle = (props) => {
  const { dataBlog, dataCategories } = props;

  const categoryNamesMap = {};
  dataCategories.forEach((category) => {
    categoryNamesMap[category.id] = category.name;
  });

  return (
    <article className={styles.entryContent}>
      <div className={styles.entryImage}>
        {dataBlog.length > 0 &&
          dataBlog.map((item, index) => {
            const categoryName =
              categoryNamesMap[item?.categories[0]] || 'Uncategorized';
            return (
              <Fragment key={index}>
                <Link href={item?.link} className={styles.entryCat}>
                  {categoryName}
                </Link>
                <Title
                  className="entryTitle"
                  title={item?.title?.rendered}
                  href={item?.slug}
                />
                <Information item={item} />
                <ReadMore item={item} />
              </Fragment>
            );
          })}
      </div>
      <div className={styles.entry}></div>
    </article>
  );
};

export const SidebarBlog = ({ dataBlog, dataCategories }) => (
  <>
    {dataBlog && <Blogs title={dataBlog} />}
    {dataBlog && <Archives date={dataBlog} />}
    {dataCategories && <Categories dataCategories={dataCategories} />}
  </>
);

const Blog = (props) => {
  const { dataBlog, dataCategories } = props;
  return (
    <>
      <PageCoverHeader title="BLOG" link="Home" titlePage="Blog" />
      <Container>
        <BreadCrumb />
        <Row>
          <Col lg={3}>
            <Search />
            <SidebarBlog dataCategories={dataCategories} dataBlog={dataBlog} />
          </Col>
          <Col lg={9}>
            <Row>
              <Col lg={6}>1</Col>
              <Col lg={6}>
                <ContentArticle
                  dataBlog={dataBlog}
                  dataCategories={dataCategories}
                />
              </Col>
              <nav className={styles.pagination}>
                <Link href="#">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                  Newer Articles
                </Link>
                <Link href="#">
                  Older Articles
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </Link>
              </nav>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
