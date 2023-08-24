'use client';
import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = (props) => {
  const { data } = props;
  console.log(data);

  const markupHomePageHeader = {
    __html: data?.content?.rendered || ''
  };

  return (
    <Container>
      <div dangerouslySetInnerHTML={markupHomePageHeader}></div>
    </Container>
  );
};

export default Blog;
