'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchBlog } from 'botak/api/pages';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import styles from './Blog.module.css';

export const SearchBlog = (props) => {
  const { className } = props;
  const router = useRouter();
  const [resultSearch, setResultSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (resultSearch === '') {
      return alert('Please fill in the search...');
    }
    updateSearchParams(resultSearch.toLowerCase());
  };

  const updateSearchParams = (resultSearch) => {
    const searchParams = new URLSearchParams(router.query);
    if (resultSearch) {
      searchParams.set('search', resultSearch);
    } else {
      searchParams.delete('search');
    }
    const newPathname = `${searchParams.toString()}`;
    router.push(`/resultSearchBlog?${newPathname}`);
  };

  return (
    <form onSubmit={handleSearch} className={styles[className]}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setResultSearch(e.target.value)}
      />
      <span>
        <button type="submit">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </span>
    </form>
  );
};

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

export const Comments = () => {
  return (
    <>
      <Title title="RECENT COMMENTS" className="title" />
    </>
  );
};

export const Categories = (props) => {
  const { dataCategories } = props;
  return (
    <>
      <Title title="CATEGORIES" className="title" />
      <ContentSider
        className="titleCate"
        items={dataCategories}
        renderItem={(category) => {
          return <Link href={`/posts/${category?.slug}`}>{category?.name}</Link>;
        }}
      />
    </>
  );
};

export const Archives = (props) => {
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
        renderItem={(dateItem) => {
          return (
            <Link href={`/posts/${dateItem?.id}`}>
              {formatDateArchives(dateItem?.date)}
            </Link>
          );
        }}
      />
    </>
  );
};

export const Blogs = (props) => {
  const { title } = props;
  return (
    <>
      <Title title="RECENT POSTS" className="title" />
      <ContentSider
        className="titleSider"
        items={title}
        renderItem={(post) => <Link href={post?.slug}>{post?.title?.rendered}</Link>}
      />
    </>
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
        BY: <Link href="">{author || ''}</Link>
      </span>
      <span>csd</span>
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

export const SidebarBlog = (props) => {
  const { dataBlog, dataCategories } = props;
  return (
    <>
      {dataBlog && <Blogs title={dataBlog} />}
      {<Comments />}
      {dataBlog && <Archives date={dataBlog} />}
      {dataCategories && <Categories dataCategories={dataCategories} />}
    </>
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

const Blog = (props) => {
  const router = useRouter();
  const { dataBlog, dataCategories } = props;
  const { totalPosts, totalPages, dataPosts } = dataBlog;
  const [posts, setPosts] = useState(dataPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBlog('', currentPage, perPage);
      setPosts(result);
    };

    fetchData();
  }, [currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);
    router.push(`/posts?page=${page}`);
  };

  return (
    <>
      <PageCoverHeader title="BLOG" link="Home" titlePage="Blog" />
      <Container>
        <BreadCrumb />
        <Row
          className={`mt-5 ${window.innerWidth <= 768 ? 'flex-column-reverse' : ''}`}
        >
          <Col lg={3} className="p-3">
            <SearchBlog className="lightSearch" />
            <SidebarBlog dataCategories={dataCategories} dataBlog={dataPosts} />
          </Col>
          <Col lg={9} className="px-3">
            <ContentArticle dataBlog={posts} dataCategories={dataCategories} />
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
