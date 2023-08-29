import { fetchBlog, fetchBlogId, fetchCategories } from 'botak/api/pages';
import SlugBlog from './SlugBlog';

const SlugServer = async ({ params }) => {
  const { slug } = params;
  const dataBlogDetails = await fetchBlogId(slug);
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  return (
    <SlugBlog
      dataBlog={dataBlog}
      dataCategories={dataCategories}
      dataBlogDetails={dataBlogDetails}
    />
  );
};

export default SlugServer;
