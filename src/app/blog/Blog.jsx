'use client';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageCoverHeader from '../components/PageCoverHeader';
import Link from 'next/link';
import styles from './Blog.module.css';

const Title = (props) => {
  const { title, className } = props;
  return <h3 className={styles[className]}>{title}</h3>;
};
const Blog = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <>
      <PageCoverHeader title="BLOG" link="Home" titlePage="Blog" />
      <Container>
        <nav className={styles}>
          <Link href="/">Home</Link>
          <span>/</span>
          <strong>Blog</strong>
        </nav>
        <Row>
          <Col lg={3}>
            <Title title="RECENT POSTS" className="titleBlog" />
            <ul className={styles.listBlog}>
              {data.map((post, index) => (
                <li key={index}>
                  <Link href={post?.guid?.rendered}>{post.title.rendered}</Link>
                </li>
              ))}
            </ul>
            {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div> */}
          </Col>
          <Col lg={5}>3</Col>
          <Col lg={4}>4</Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
