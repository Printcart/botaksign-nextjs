import {
  fetchBlog,
  fetchBlogId,
  fetchBlogRelated,
  fetchBlogSidebar,
  fetchCategories
} from 'botak/api/pages';
import Post from './Post';

const Page = async ({ params }) => {
  const { slug } = params;
  
  const dataCategories = await fetchCategories();

  const dataBlogDetails = await fetchBlogId(slug);
  const id = dataBlogDetails.map((item) => item.categories);
  const converId = +id;
  const dataRelated = await fetchBlogRelated(converId);

  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <Post
      dataCategories={dataCategories}
      dataBlogDetails={dataBlogDetails}
      dataRelated={dataRelated}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;
