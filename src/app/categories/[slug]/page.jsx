import React from 'react';
import {
  fetchBlog,
  fetchBlogRelated,
  fetchBlogSidebar,
  fetchCategories,
  fetchCategoriesId
} from 'botak/api/pages';
import Categories from './Categories';

const Page = async ({ params }) => {
  const { slug } = params;
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  const dataId = await fetchCategoriesId(slug);
  const id = dataId.map((item) => item.id);
  const dataCate = await fetchBlogRelated(id);
  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <Categories
      id={id}
      slug={slug}
      dataCate={dataCate}
      dataBlog={dataBlog}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;