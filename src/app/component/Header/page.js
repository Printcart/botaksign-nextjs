'use client';
import HeaderMiddle from './HeaderMiddle/page';
import HeaderTop from './HeaderTop/page';

const Header = () => {
  return (
    <div className="text-white transition">
      <header className="header">
        <div>
          <HeaderTop />
        </div>
        <div>
          <HeaderMiddle />
        </div>
      </header>
    </div>
  );
};
export default Header;
