import { fetchBlogId } from 'botak/api/pages';
import React from 'react';
import SlugBlog from './SlugBlog';

const SlugServer = async ({ params }) => {
  const { slug } = params;
  const dataBlogDetails = await fetchBlogId(slug);
  return <SlugBlog dataBlogDetails={dataBlogDetails} />;
};

export default SlugServer;
