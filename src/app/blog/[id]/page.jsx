'use client';
import { fetchBlogId } from 'botak/api/pages';
import React from 'react';
import { Container } from 'react-bootstrap';
import useSWR from 'swr';

const SlugBlog = ({ params }) => {
  const { id } = params;
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(fetchBlogId(id), fetcher);

  // if (error) return 'An error has occurred.';
  // if (isLoading) return 'Loading...';
  console.log(data);
  return <Container>{params.slug}</Container>;
};

export default SlugBlog;
