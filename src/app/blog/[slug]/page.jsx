import {
  fetchBlogSlug,
  fetchCategoriesId,
  fetchBlogSidebar,
  fetchCategories
} from 'botak/api/pages';
import Post from './Post';

const Page = async ({ params }) => {
  const { slug } = params;

  const dataCategories = await fetchCategories();

  const queryParams = { slug };
  const dataBlogDetails = await fetchBlogSlug(queryParams);

  const id = dataBlogDetails[0].id;

  const queryParamsId = { id };
  const categoriesId = await fetchCategoriesId(queryParamsId);

  const dataTitleBlogSidebar = await fetchBlogSidebar();

  return (
    <Post
      dataCategories={dataCategories}
      dataBlogDetails={dataBlogDetails}
      categoriesId={categoriesId}
      dataTitleBlogSidebar={dataTitleBlogSidebar}
    />
  );
};

export default Page;
