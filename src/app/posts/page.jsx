import { fetchBlog, fetchCategories } from 'botak/api/pages';
import Blog from './Blog';

const BlogServer = async () => {
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();

  return <Blog dataBlog={dataBlog} dataCategories={dataCategories} />;
};

export default BlogServer;
