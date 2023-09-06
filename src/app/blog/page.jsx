import { fetchBlog, fetchCategories } from 'botak/api/pages';
import Posts from './Posts';

const Page = async () => {
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();

  return <Posts dataBlog={dataBlog} dataCategories={dataCategories} />;
};

export default Page;
