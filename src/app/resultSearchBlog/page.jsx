'use client';
import { fetchBlog } from 'botak/api/pages';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './SearchBlog.module.css';
import { SearchBlog } from '../components/Sidebar/page';
import ArticlePost from '../components/ArticlePost';

const Title = (props) => {
  const { params } = props;
  return (
    <div className={styles.title}>
      <Link href="/">Home</Link>
      <span className={styles.line}>/</span>
      <strong>You searched for &apos;{params}&apos;</strong>
    </div>
  );
};

const ResultSearchBlog = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    const fectchdata = async () => {
      const queryParams = { search };
      const res = await fetchBlog(queryParams);
      setListPosts(res);
    };

    fectchdata();
  }, [search]);

  return (
    <Container>
      <Title params={search} />
      <div className={styles.resultPost}>
        {listPosts?.dataPosts?.length > 0 ? (
          listPosts?.dataPosts.map((item) => (
            <ArticlePost
              key={item?.id}
              link={item?.link}
              slug={item?.slug}
              idItem={item?.id}
              title={item?.title?.rendered}
              date={item?.date}
              excerpt={item?.excerpt?.rendered}
            />
          ))
        ) : (
          <section>
            <h1 className={styles.nothingFound}>Nothing Found</h1>
            <div className={styles.pageContent}>
              <p>
                Sorry, but nothing matched your search terms. Please try again with
                some different keywords.
              </p>
              <SearchBlog className="resultBlog" />
            </div>
          </section>
        )}
      </div>
    </Container>
  );
};

export default ResultSearchBlog;
