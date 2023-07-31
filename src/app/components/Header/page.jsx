import { fetcPrimaryMenu, fetchNextMenu } from 'botak/api/homepage';
import { MenusMobile } from './HeaderMenus';
import HeaderMiddle, { HeaderMiddleMobile } from './HeaderMiddle';
import HeaderTop from './HeaderTop';
import { arrHierarchy } from './MegaMenu';
import NavMenu from './NavMenu';
import styles from './header.module.css';

const Header = async () => {
  const primaryMenu = await fetcPrimaryMenu();
  const nextMenu = await fetchNextMenu();
  const dataMenu = [...primaryMenu, ...nextMenu];
  const menuItems = arrHierarchy(dataMenu);
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
          <NavMenu menuItems={menuItems} />
          {/* <HeaderMenus menus={menus} dataMenu={menuItems} /> */}
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
