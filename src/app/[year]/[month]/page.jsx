import { fetchBlog, fetchBlogSidebar, fetchCategories } from 'botak/api/pages';
import Archives from './Archives';

const Page = async ({ params }) => {
  const { year, month } = params;

  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  const date = await fetchBlog('', year, month);
  const dataTitleBlogSidebar = await fetchBlogSidebar();
  return (
    <Archives
      dataCategories={dataCategories}
      params={params}
      date={date}
      year={year}
      month={month}
      dataBlog={dataBlog}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;
