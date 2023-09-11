import { fetchBlog, fetchBlogSidebar, fetchCategories } from 'botak/api/pages';
import Posts from './Posts';

const Page = async () => {
  
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <Posts
      dataBlog={dataBlog}
      dataCategories={dataCategories}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;
