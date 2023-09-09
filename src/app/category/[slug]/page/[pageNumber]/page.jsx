import {
  fetchCategoriesId,
  fetchBlogSidebar,
  fetchCategories,
  fetchCategoriesSlug
} from 'botak/api/pages';
import PageNumber from './PageNumber';

const Page = async ({ params }) => {
  const { pageNumber, slug } = params;

  const queryParamsSlug = { slug };
  const dataCategories = await fetchCategories();
  const dataId = await fetchCategoriesSlug(queryParamsSlug);
  const id = dataId[0].id;
  const queryParamsId = { id };
  const dataCate = await fetchCategoriesId(queryParamsId);

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

export default Page;
