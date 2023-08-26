'use client';
import { Col, Container, Row } from 'react-bootstrap';
import useSWR from 'swr';
import { SidebarBlog } from '../Blog';
import styles from './SlugBlog.module.css';
import Link from 'next/link';

const fetcherWithAuthorization = (url) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_USER}:${process.env.NEXT_PUBLIC_WORDPRESS_API_PASS}`
      )}`
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Unauthorized');
    }
    return res.json();
  });

const SlugBlog = ({ params }) => {
  const { slug } = params;
  console.log(slug);

  const fetUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}wp/v2/posts?slug=${slug}`;

  const { data, error, isLoading } = useSWR(fetUrl, fetcherWithAuthorization, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <SidebarBlog />
        </Col>
        <Col lg={9}>
          <h3 className={styles.entryTitle}>
            <Link
              href={data?.link}
              dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}
            />
            <div className={styles.line}></div>
          </h3>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
          ></div>
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
