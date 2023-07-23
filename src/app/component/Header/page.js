'use client';
import { menus } from 'botak/app/data/menus';
import HeaderMenus, { MenusMobile } from './HeaderMenus/page';
import HeaderMiddle, { HeaderMiddleMobile } from './HeaderMiddle/page';
import HeaderTop from './HeaderTop/page';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className="text-white transition border-bottom">
      <header className={styles.headerDesktop}>
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
      <header className={styles.headerMobile}>
        <div className="pt-2">
          <HeaderMiddleMobile />
        </div>
        <div className="menu-search pb-2">
          <MenusMobile />
        </div>
      </header>
    </div>
  );
};
export default Header;
