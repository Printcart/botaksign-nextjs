import React from 'react';
import {
  fetchBlog,
  fetchBlogRelated,
  fetchCategories,
  fetchCategoriesId
} from 'botak/api/pages';
import Categori from './Categori';

const Page = async ({ params }) => {
  const { slug } = params;
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();

  const dataId = await fetchCategoriesId(slug);
  const id = dataId.map((item) => item.id);
  const dataCate = await fetchBlogRelated(id);

  return (
    <Categori
      id={id}
      dataCate={dataCate}
      dataBlog={dataBlog}
      dataCategories={dataCategories}
    />
  );
};

export default Page;
