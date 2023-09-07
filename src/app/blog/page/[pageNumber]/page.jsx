import { fetchBlog, fetchCategories } from 'botak/api/pages';
import PageNumber from './PageNumber';

const Page = async ({ params }) => {
  const { pageNumber } = params;
  const dataBlog = await fetchBlog('', '', '', pageNumber, 4);
  const dataCategories = await fetchCategories();

  return <PageNumber pageNumber={pageNumber} dataBlog={dataBlog} dataCategories={dataCategories} />;
};

export default Page;
