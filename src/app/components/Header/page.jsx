import { fetcPrimaryMenu } from 'botak/api/homepage';
import { arrHierarchy } from '../MegaMenu';
import HeaderMiddle, { HeaderMiddleMobile } from './HeaderMiddle';
import HeaderTop from './HeaderTop';
import NavMenu, { MenusMobile } from './NavMenu';
import styles from './header.module.css';

const Header = async () => {
  const primaryMenu = await fetcPrimaryMenu();
  const menuItems = arrHierarchy(primaryMenu);
  return (
    <div className="text-white transition border-bottom">
      <header className={styles.headerDesktop}>
        <div className={styles.sizeheader}>
          <HeaderTop />
        </div>
        <div className="pb-2">
          <HeaderMiddle />
        </div>
        <div className={styles.wrappermenu}>
          <NavMenu menuItems={menuItems} />
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
