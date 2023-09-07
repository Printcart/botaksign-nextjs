import { fetchBlog, fetchBlogSidebar, fetchCategoriesId } from 'botak/api/pages';
import PageNumber from './PageNumber';

const page = async ({ params }) => {
  const { pageNumber, year, month } = params;
  const dataTitleBlogSidebar = await fetchBlogSidebar();
  const dataCategories = await fetchCategoriesId();
  const date = await fetchBlog('', year, month);
  return (
    <PageNumber
      dataTitleBlogSidebar={dataTitleBlogSidebar}
      dataCategories={dataCategories}
      pageNumber={pageNumber}
      dataBlog={date}
      year={year}
      month={month}
    />
  );
};

export default page;
