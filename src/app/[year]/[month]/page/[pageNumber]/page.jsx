import { fetchBlog, fetchBlogSidebar, fetchCategories } from 'botak/api/pages';
import PageNumber from './PageNumber';

const page = async ({ params }) => {
  const { pageNumber, year, month } = params;
  
  const dataTitleBlogSidebar = await fetchBlogSidebar();
  const dataCategories = await fetchCategories();
  const dataDate = await fetchBlog('', year, month);

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

export default page;
