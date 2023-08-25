import React from 'react';
import Blog from './Blog';
import { fetchBlog, fetchCategories } from 'botak/api/pages';

const BlogServer = async () => {
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  return <Blog dataBlog={dataBlog} dataCategories={dataCategories} />;
};

export default BlogServer;
