'use client';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import Link from 'next/link';
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

const Blog = (props) => {
  const { dataBlog, dataCategories } = props;
  console.log(dataCategories);
  return (
    <>
      <PageCoverHeader title="BLOG" link="Home" titlePage="Blog" />
      <Container>
        <Title />
        <Search />
        <Row>
          <Col lg={3}>
            <div className={styles.blogs}>
              <TitleName title="RECENT POSTS" className="titleBlog" />
              <ul className={styles.listBlog}>
                {dataBlog?.length > 0 &&
                  dataBlog?.map((post, index) => (
                    <li key={index}>
                      <Link href={post?.guid?.rendered}>
                        {post?.title?.rendered}
                      </Link>
                    </li>
                  ))}
              </ul>
              {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div> */}
            </div>

            <TitleName title="RECENT COMMENTs" className="titleBlog" />
            <TitleName title="ARCHIVES" className="titleBlog" />
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
          </Col>
          <Col lg={5}>3</Col>
          <Col lg={4}>4</Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
