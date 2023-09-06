import { fetchBlog, fetchCategories } from 'botak/api/pages';
import Archives from './Archives';

const Page = async ({ params }) => {
  const { year, month } = params;

  const dataBlog = await fetchBlog();
  const dataCategories = await fetchCategories();
  const date = await fetchBlog('', year, month);

  return (
    <Archives
      dataCategories={dataCategories}
      params={params}
      date={date}
      dataBlog={dataBlog}
    />
  );
};

export default Page;
