import { fetchBlog, fetchBlogSidebar, fetchCategories } from 'botak/api/pages';
import PageNumber from './PageNumber';

const Page = async ({ params }) => {
  const { pageNumber } = params;
  const dataBlog = await fetchBlog('', '', '', pageNumber, 4);
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
