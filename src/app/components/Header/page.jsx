'use client';
import { menus } from 'botak/app/data/menus';
import styles from './header.module.css';
import HeaderTop from './HeaderTop';
import HeaderMiddle, { HeaderMiddleMobile } from './HeaderMiddle';
import HeaderMenus, { MenusMobile } from './HeaderMenus';

const Header = () => {
  return (
    <div className="text-white transition border-bottom">
      <header className={styles.headerDesktop}>
        <div>
          <HeaderTop />
        </div>
        <div className="pb-2">
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
