import { fetchBlog, fetchBlogSidebar, fetchCategories } from 'botak/api/pages';
import PageNumber from './PageNumber';

const Page = async ({ params }) => {
  const { pageNumber, year, month } = params;

  const dataTitleBlogSidebar = await fetchBlogSidebar();
  const dataCategories = await fetchCategories();
  const queryParams = { year, month };
  const dataDate = await fetchBlog(queryParams);

  return (
    <PageNumber
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      dataCategories={dataCategories}
      pageNumber={pageNumber}
      dataDate={dataDate}
      year={year}
      month={month}
    />
  );
};

export default Page;
