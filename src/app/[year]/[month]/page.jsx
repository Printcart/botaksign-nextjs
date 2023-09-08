import { fetchBlog, fetchBlogSidebar, fetchCategories } from 'botak/api/pages';
import Archives from './Archives';

const Page = async ({ params }) => {
  const { year, month } = params;

  const dataCategories = await fetchCategories();
  const dataDate = await fetchBlog('', year, month);
  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <Archives
      dataCategories={dataCategories}
      dataDate={dataDate}
      year={year}
      month={month}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;
