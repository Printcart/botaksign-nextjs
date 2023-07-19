'use client';
import { menus } from 'botak/app/constant';
import HeaderMenus from './HeaderMenus/page';
import HeaderMiddle from './HeaderMiddle/page';
import HeaderTop from './HeaderTop/page';

const Header = () => {
  return (
    <div className="text-white transition">
      <header className="header">
        <div>
          <HeaderTop />
        </div>
        <div className="pb-3">
          <HeaderMiddle />
        </div>
        <div className="stickywrapper">
          <HeaderMenus menus={menus} />
        </div>
      </header>
    </div>
  );
};
export default Header;
