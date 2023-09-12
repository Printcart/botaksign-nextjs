import Homepage from 'botak/components/Homepage';
import HomepageServer from 'botak/components/HomepageServer';

export default function Home() {
  return (
    <div className="site-content" id="content">
      <Homepage>
        <HomepageServer />
      </Homepage>
    </div>
  );
}
