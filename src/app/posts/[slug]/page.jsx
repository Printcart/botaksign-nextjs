import {
  fetchBlog,
  fetchBlogId,
  fetchBlogRelated,
  fetchCategories,
  fetchCategoriesId
} from 'botak/api/pages';
import Posts from './Posts';

const SlugServer = async ({ params }) => {
  const { slug } = params;
  const dataBlogDetails = await fetchBlogId(slug);
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  const id = dataBlogDetails.map((item) => item.categories);
  const dataRelated = await fetchBlogRelated(id);

  return (
    <Posts
      dataBlog={dataBlog}
      dataCategories={dataCategories}
      dataBlogDetails={dataBlogDetails}
      dataRelated={dataRelated}
    />
  );
};

export default SlugServer;
