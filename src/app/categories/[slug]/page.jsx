import React from 'react';
import Post from './Post';
import {
  fetchBlog,
  fetchBlogRelated,
  fetchCategories,
  fetchCategoriesId
} from 'botak/api/pages';

const Page = async ({ params }) => {
  const { slug } = params;
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  const data = await fetchCategoriesId(slug);
  const id = data.map((item) => item.id);
  const dataCate = await fetchBlogRelated(id);

  return (
    <Post dataCate={dataCate} dataBlog={dataBlog} dataCategories={dataCategories} />
  );
};

export default Page;
