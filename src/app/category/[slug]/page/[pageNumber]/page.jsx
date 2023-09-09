import {
  fetchBlogById,
  fetchBlogSidebar,
  fetchCategories,
  fetchCategoriesId
} from 'botak/api/pages';
import PageNumber from './PageNumber';

const page = async ({ params }) => {
  const { pageNumber, slug } = params;

  const queryParamsId = { slug };
  const dataCategories = await fetchCategories();
  const dataId = await fetchCategoriesId(queryParamsId);
  const id = dataId[0].id;
  const queryParams = { id };
  const dataCate = await fetchBlogById(queryParams);

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
