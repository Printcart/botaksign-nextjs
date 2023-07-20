import { fetchHomePage } from 'botak/api/page';

const Home = async () => {
  const rawMarkup = await fetchHomePage();

  return (
    <div dangerouslySetInnerHTML={{ __html: rawMarkup.content.rendered }}></div>
  );
};

export default Home;
