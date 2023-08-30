import { fetchBlog, fetchCategories } from 'botak/api/pages';
import Category from './Category';

const CategoriesServer = async () => {
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  return <Category dataBlog={dataBlog} dataCategories={dataCategories} />;
};

export default CategoriesServer;
