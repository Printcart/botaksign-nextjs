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
  const data = await fetchCategoriesId(slug);
  const id = data.map((item) => item.id);
  const dataCate = await fetchBlogRelated(id);

  return (
    <Categori
      dataCate={dataCate}
      dataBlog={dataBlog}
      dataCategories={dataCategories}
    />
  );
};

export default Page;
