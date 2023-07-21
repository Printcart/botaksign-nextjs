import { fetchHomePage } from 'botak/api/page';

const Home = async () => {
  const rawMarkup = await fetchHomePage();

  const markup = { __html: rawMarkup?.content?.rendered || '' };

  return (
    <div>
      <div dangerouslySetInnerHTML={markup}></div>
    </div>
  );
};

export default Home;
