import { menus } from 'botak/app/data/menus';
import HeaderMenus, { MenusMobile } from './HeaderMenus';
import HeaderMiddle, { HeaderMiddleMobile } from './HeaderMiddle';
import HeaderTop from './HeaderTop';
import styles from './header.module.css';
import { fetcPrimaryMenu } from 'botak/api/homepage';

const Header = async () => {
  const dataMenu = await fetcPrimaryMenu();
  return (
    <div className="text-white transition border-bottom">
      <header className={styles.headerDesktop}>
        <div className={styles.sizeheader}>
          <HeaderTop />
        </div>
        <div className="pb-2">
          <HeaderMiddle />
        </div>
        <div className="stickywrapper">
          <HeaderMenus menus={menus} dataMenu={dataMenu} />
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
