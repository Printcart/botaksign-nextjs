import React from 'react';
import {
  fetchBlogById,
  fetchBlogSidebar,
  fetchCategories,
  fetchCategoriesId
} from 'botak/api/pages';
import Categories from './Categories';

const Page = async ({ params }) => {
  const { slug } = params;

  const dataCategories = await fetchCategories();

  const dataId = await fetchCategoriesId(slug);
  const id = dataId[0].id;
  const dataCate = await fetchBlogById(id);
  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <Categories
      id={id}
      slug={slug}
      dataCate={dataCate}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;
