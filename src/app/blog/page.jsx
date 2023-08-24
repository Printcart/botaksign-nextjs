import React from 'react';
import Blog from './Blog';
import { fetchBlog } from 'botak/api/pages';

const BlogServer = async () => {
  const data = await fetchBlog();
  return <Blog data={data} />;
};

export default BlogServer;
