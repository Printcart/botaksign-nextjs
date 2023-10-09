import Homepage from './components/Homepage';
import HomepageServer from './components/HomepageServer';

export default function Home() {
  return (
    <div className="site-content" id="content">
      <Homepage>
        <HomepageServer />
      </Homepage>
    </div>
  );
}