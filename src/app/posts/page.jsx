import { fetchBlog, fetchCategories } from 'botak/api/pages';
import Blog from './Posts';

const Page = async () => {
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();

  return <Blog dataBlog={dataBlog} dataCategories={dataCategories} />;
};

export default Page;
