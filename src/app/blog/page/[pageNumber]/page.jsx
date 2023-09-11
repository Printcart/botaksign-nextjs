import { fetchBlog, fetchBlogSidebar, fetchCategories } from 'botak/api/pages';
import PageNumber from './PageNumber';

const Page = async ({ params }) => {
  const { pageNumber } = params;

  const queryParams = {
    page: pageNumber,
    perPage: 4
  };
  const dataBlog = await fetchBlog(queryParams);
  const dataCategories = await fetchCategories();
  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <PageNumber
      pageNumber={pageNumber}
      dataBlog={dataBlog}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;
