'use client';
import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = (props) => {
  const { data } = props;
  console.log(data);
  return <Container>Blog</Container>;
};

export default Blog;
