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
  
  const queryParamsId = { slug };
  const dataId = await fetchCategoriesId(queryParamsId);

  const id = dataId[0].id;
  const queryParams = { id };
  const dataCate = await fetchBlogById(queryParams);
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
