import {
  fetchBlog,
  fetchBlogId,
  fetchBlogRelated,
  fetchCategories
} from 'botak/api/pages';
import Post from './Post';

const Page = async ({ params }) => {
  const { slug } = params;
  const dataBlogDetails = await fetchBlogId(slug);
  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  const id = dataBlogDetails.map((item) => item.categories);
  const dataRelated = await fetchBlogRelated(id);

  return (
    <Post
      dataBlog={dataBlog}
      dataCategories={dataCategories}
      dataBlogDetails={dataBlogDetails}
      dataRelated={dataRelated}
    />
  );
};

export default Page;
