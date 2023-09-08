import React from 'react';
import {
  fetchBlogRelated,
  fetchBlogSidebar,
  fetchCategories,
  fetchCategoriesId
} from 'botak/api/pages';
import Categories from './Categories';

const Page = async ({ params }) => {
  const { slug } = params;

  const dataCategories = await fetchCategories();

  const dataId = await fetchCategoriesId(slug);
  const id = dataId.map((item) => item.id);
  const converId = +id;
  const dataCate = await fetchBlogRelated(converId);

  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <Categories
      id={converId}
      slug={slug}
      dataCate={dataCate}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;
