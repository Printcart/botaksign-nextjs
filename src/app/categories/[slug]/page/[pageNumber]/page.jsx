import {
  fetchBlogRelated,
  fetchBlogSidebar,
  fetchCategories,
  fetchCategoriesId
} from 'botak/api/pages';
import PageNumber from './PageNumber';

const page = async ({ params }) => {
  const { pageNumber, slug } = params;
  const dataCategories = await fetchCategories();
  const dataId = await fetchCategoriesId(slug);
  const id = dataId.map((item) => item.id);
  const dataCate = await fetchBlogRelated(id);
  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <PageNumber
      id={id}
      pageNumber={pageNumber}
      slug={slug}
      dataCategories={dataCategories}
      dataCate={dataCate}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default page;
