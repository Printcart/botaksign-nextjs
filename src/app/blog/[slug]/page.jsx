import {
  fetchBlogId,
  fetchBlogById,
  fetchBlogSidebar,
  fetchCategories
} from 'botak/api/pages';
import Post from './Post';

const Page = async ({ params }) => {
  const { slug } = params;
  
  const dataCategories = await fetchCategories();

  const queryParams = { slug };
  const dataBlogDetails = await fetchBlogId(queryParams);
  const id = dataBlogDetails[0].id;
  const dataRelated = await fetchBlogById(id);

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
