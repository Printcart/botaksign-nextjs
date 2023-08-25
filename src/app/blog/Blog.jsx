'use client';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import styles from './Blog.module.css';

const Search = () => {
  return (
    <form>
      <input className={styles.input} type="text" placeholder="Search" />
      <span className={styles.button}>
        <button type="submit">cc</button>
      </span>
    </form>
  );
};

const Title = () => {
  return (
    <nav className={styles.title}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Blog</strong>
    </nav>
  );
};

const TitleName = (props) => {
  const { title, className } = props;
  return <h3 className={styles[className]}>{title}</h3>;
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
};

const ContentArticle = (props) => {
  const { dataBlog, dataCategories } = props;

  const categoryNamesMap = {};
  dataCategories.forEach((category) => {
    categoryNamesMap[category.id] = category.name;
  });

  console.log(dataBlog);
  return (
    <>
      <article className={styles.entryContent}>
        <div className={styles.entryImage}>
          {dataBlog.length > 0 &&
            dataBlog.map((item, index) => {
              const categoryName =
                categoryNamesMap[item?.categories[0]] || 'Uncategorized';
              return (
                <div key={index}>
                  <Link href={item?.link} className={styles.entryCat}>
                    {categoryName}
                  </Link>

                  <h3 className={styles.entryTitle}>
                    <Link href={`/blog/${item?.id}`}>{item?.title?.rendered}</Link>
                  </h3>
                  <div className={styles.entryWrap}>
                    <span className={styles.date}>{formatDate(item?.date)}</span>
                    <span>ss</span>
                    <span>csd</span>
                    <span>No Comments</span>
                  </div>
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
                    {/* Add your share options here */}
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.entry}></div>
      </article>
    </>
  );
};

const Blogs = (props) => {
  const { title } = props;
  return (
    <div className={styles.blogs}>
      <TitleName title="RECENT POSTS" className="titleBlog" />
      <ul className={styles.listBlog}>
        {title?.length > 0 &&
          title?.map((post, index) => (
            <li key={index}>
              <Link href={post?.guid?.rendered}>{post?.title?.rendered}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

const Comments = () => {
  return (
    <div className={styles.comments}>
      <TitleName title="RECENT COMMENTs" className="titleComments" />
    </div>
  );
};

const Archives = () => {
  return (
    <div className={styles.archives}>
      <TitleName title="ARCHIVES" className="titleArchives" />
    </div>
  );
};

const Categories = (props) => {
  const { dataCategories } = props;

  return (
    <div className={styles.categories}>
      <TitleName title="CATEGORIES" className="titleCategories" />
      <ul className={styles.listCategories}>
        {dataCategories?.length > 0 &&
          dataCategories?.map((cate) => (
            <li key={cate.id}>
              <Link href={cate?.slug}>{cate?.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const SidebarBlog = (props) => {
  const { dataBlog, dataCategories } = props;
  return (
    <>
      <Blogs title={dataBlog} />
      <Comments />
      <Archives />
      <Categories dataCategories={dataCategories} />
    </>
  );
};

const Blog = (props) => {
  const { dataBlog, dataCategories } = props;
  return (
    <>
      <PageCoverHeader title="BLOG" link="Home" titlePage="Blog" />
      <Container>
        <Title />
        <Row>
          <Search />
          <Col lg={3}>
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
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
