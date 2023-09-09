import React from 'react';
import {
  fetchCategoriesId,
  fetchBlogSidebar,
  fetchCategories,
  fetchCategoriesSlug
} from 'botak/api/pages';
import Categories from './Categories';

const Page = async ({ params }) => {
  const { slug } = params;

  const dataCategories = await fetchCategories();

  const queryParamsSlug = { slug };
  const dataId = await fetchCategoriesSlug(queryParamsSlug);

  const id = dataId[0].id;
  const queryParamsId = { id };
  const dataCate = await fetchCategoriesId(queryParamsId);
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
