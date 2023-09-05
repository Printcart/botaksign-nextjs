'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchBlog } from 'botak/api/pages';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import Sidebar from '../components/Sidebar/page';
import styles from './Posts.module.css';

export const BreadCrumb = () => {
  return (
    <nav className={styles.titleBreadCrumb}>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Blog</strong>
    </nav>
  );
};

export const Title = (props) => {
  const { title, className, href } = props;
  return (
    <h3 className={styles[className]}>
      <Link href={`/posts/${href}`}>{title}</Link>
    </h3>
  );
};

export const ContentSider = (props) => {
  const { className, items, renderItem } = props;
  return (
    <div className={styles[className]}>
      <ul>
        {items?.length > 0 &&
          items?.map((item) => <li key={item.id}>{renderItem(item)}</li>)}
      </ul>
    </div>
  );
};

export const Information = (props) => {
  const { date, author } = props;
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  return (
    <div className={styles.entryWrap}>
      <span className={styles.date}>{formatDate(date)}</span>
      <span>
        BY:{' '}
        <Link href="" className={styles.author}>
          {author || ''}
        </Link>
      </span>
      <span>
        2{' '}<span>MINUTE READ</span>
      </span>
      <span>{'' || 'No Comments'}</span>
    </div>
  );
};

export const ReadMore = (props) => {
  const { excerpt, slug } = props;
  return (
    <Fragment>
      <div>
        <div
          className={styles.entryText}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
        <div className={styles.readMoreLink}>
          <Link href={`/posts/${slug}`}>Read more</Link>
        </div>
      </div>
      <div className={styles.entryFooter}>
        <span>share: </span>
      </div>
    </Fragment>
  );
};

export const ArticlePost = (props) => {
  const {
    id,
    link,
    title,
    slug,
    date,
    excerpt,
    categoryName,
    featuredMediaUrl,
    idItem,
    author
  } = props;

  return (
    <article key={id} className={styles.entryContent}>
      <div className={styles.subContent}>
        <div className={styles.entryThumb}>
          <div className={styles.entryImage}>
            <Image
              width={300}
              height={300}
              alt="Image"
              src={
                featuredMediaUrl ||
                'https://botaksign-library.s3.ap-southeast-1.amazonaws.com/2020/08/stickerprintonly_detail_ink.jpg'
              }
            />
          </div>
          <div className={styles.entryNumber}>
            <span>{idItem || ''}</span>
          </div>
        </div>
        <div className={styles.entry}>
          <Link href={link} className={styles.entryCat}>
            {categoryName}
          </Link>
          <Title className="entryTitle" title={title} href={slug} />
          <Information date={date} author={author} />
          <ReadMore excerpt={excerpt} slug={slug} />
        </div>
      </div>
    </article>
  );
};

export const ContentArticle = (props) => {
  const { dataBlog, dataCategories } = props;
  const categoryNamesMap = {};
  dataCategories.forEach((category) => {
    categoryNamesMap[category.id] = category.name;
  });

  return (
    <>
      {dataBlog?.dataPosts?.length > 0 &&
        dataBlog?.dataPosts?.map((item) => {
          const categoryName =
            categoryNamesMap[item?.categories[0]] || 'Uncategorized';
          return (
            <ArticlePost
              categoryName={categoryName}
              key={item?.id}
              link={item?.link}
              slug={item?.slug}
              title={item?.title?.rendered}
              date={item?.date}
              excerpt={item?.excerpt?.rendered}
              featuredMediaUrl={item?.featured_media_url}
              idItem={item?.id}
              author={item?.author_data?.name}
            />
          );
        })}
    </>
  );
};

export const Pagination = (props) => {
  const { totalPages, currentPage, setCurrentPage } = props;
  const router = useRouter();

  const goToPage = (page) => {
    setCurrentPage(page);
    router.push(`/posts?page=${page}`);
  };

  return (
    <>
      {totalPages > 0 && (
        <nav className={styles.pagination}>
          {currentPage > 1 && (
            <button onClick={() => goToPage(currentPage - 1)}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
              Newer Articles
            </button>
          )}
          {currentPage < totalPages && (
            <button onClick={() => goToPage(currentPage + 1)}>
              Older Articles
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </button>
          )}
        </nav>
      )}
    </>
  );
};

const Posts = (props) => {
  const { dataBlog, dataCategories } = props;
  const { totalPosts, totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);
  const [hasPostsData, setHasPostsData] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', '', '', currentPage, perPage);
      setPosts(result);
      result?.dataPosts.length > 0 && setHasPostsData(true);
    };

    fetchData();
  }, [currentPage]);

  return (
    <>
      <PageCoverHeader title="BLOG" link="Home" titlePage="Blog" />
      <Container>
        <BreadCrumb />
        <Row className={styles.contents}>
          <Col lg={3} className="p-3">
            <Sidebar dataCategories={dataCategories} dataBlog={dataPosts} />
          </Col>
          <Col lg={9} className="px-3">
            {hasPostsData ? (
              <>
                <ContentArticle dataBlog={posts} dataCategories={dataCategories} />
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Posts;
