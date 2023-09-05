import { fetchBlog, fetchCategories } from 'botak/api/pages';
import Archives from './Archives';

const Page = async ({ params }) => {
  const { year, month } = params;

  const dataBlog = await fetchBlog();
  const date = await fetchBlog('', year, month);
  const dataCategories = await fetchCategories();

  return (
    <Archives dataCategories={dataCategories} date={date} dataBlog={dataBlog} />
  );
};

export default Page;
